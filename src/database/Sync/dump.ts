/* eslint-disable max-lines-per-function */
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-08-17 13:35
// ########################################
// @ Modified time: 2022-08-17 13:03:35

import type { Model } from '@nozbe/watermelondb';
import { Q } from '@nozbe/watermelondb';

import database from '@/database/index';
import type CoibfeFrigorificoModel from '@/database/model/CoibfeFrigorifico';
import type CoibfeProductorModel from '@/database/model/CoibfeProductor';
import type CoibfePropriedadModel from '@/database/model/CoibfePropriedad';
import type GeneralModel from '@/database/model/General';
import type UserCategoryModel from '@/database/model/UserCategory';
import { downloadDumpApi } from '@/database/Sync/apis';

const dump = async () => {
  const CoibfePropriedads =
    database.get<CoibfePropriedadModel>('coibfepropriedads');

  const CoibfeProductors =
    database.get<CoibfeProductorModel>('coibfeproductors');

  const CoibfeFrigorificos =
    database.get<CoibfeFrigorificoModel>('coibfefrigorificos');

  const UserCategorys = database.get<UserCategoryModel>('userscategorys');

  const Generals = database.get<GeneralModel>('generals');

  // console.log('CoibfePropriedads', CoibfePropriedads);
  // console.log('CoibfeProductors', CoibfeProductors);
  // console.log('CoibfeFrigorificos', CoibfeFrigorificos);
  // console.log('UserCategorys', UserCategorys);

  const {
    coibfepropriedads,
    coibfeproductors,
    coibfefrigorificos,
    categoryusers,
    generals,
  } = await downloadDumpApi();

  // console.log('coibfepropriedads', coibfepropriedads);
  // console.log('coibfeproductors', coibfeproductors);
  // console.log('coibfeproductors', coibfeproductors);
  // console.log('categoryusers', categoryusers);

  const inserts: Model[] = [];
  //-----------------------------------------------------------
  //-----------------------------------------------------------
  try {
    const propriedadIds = coibfepropriedads.map(
      (propriedad) => propriedad.propriedadsigor
    );

    const existingCoibfePropriedads = await CoibfePropriedads.query(
      Q.where('propriedadsigor', Q.oneOf(propriedadIds))
    ).fetch();

    const existingCoibfePropriedadIds = existingCoibfePropriedads.map(
      (propriedad) => propriedad.propriedadsigor
    );

    coibfepropriedads
      .filter(
        (propriedad) =>
          !existingCoibfePropriedadIds.includes(propriedad.propriedadsigor)
      )
      .forEach((propriedad) => {
        inserts.push(
          CoibfePropriedads.prepareCreate((p) => {
            p._raw.id = propriedad.id.toString();
            p.title = propriedad.title;
            p.body = propriedad.body;
            p.serverId = propriedad.id;

            p.dbversion = propriedad.dbversion;
            p.propriedadname = propriedad.propriedadname;
            p.propriedadpropietario = propriedad.propriedadpropietario;
            p.propriedadstatus = propriedad.propriedadstatus;
            p.propriedadsigor = propriedad.propriedadsigor;
            p.propriedadsitrap = propriedad.propriedadsitrap;
            p.propriedaddepartamento = propriedad.propriedaddepartamento;
            p.propriedaddistrito = propriedad.propriedaddistrito;
            let productorss = JSON.stringify(propriedad.propriedadproductors);
            productorss = productorss.split('"').join('');
            productorss = productorss.replace('[', '');
            productorss = productorss.replace(']', '');
            //console.log('PRODUCTORSS', productorss);
            p.propriedadproductors = productorss;
          })
        );
      });
  } catch (e) {
    console.log('dumpError propriedad', e);
  }
  //-----------------------------------------------------------
  //-----------------------------------------------------------
  try {
    const productorIds = coibfeproductors.map(
      (productor) => productor.productor_id
    );

    const existingCoibfeProductors = await CoibfeProductors.query(
      Q.where('productor_id', Q.oneOf(productorIds))
    ).fetch();

    const existingCoibfeProductorIds = existingCoibfeProductors.map(
      (productor) => productor.productor_id
    );

    //console.log(coibfeproductors);
    coibfeproductors
      .filter(
        (productor) =>
          !existingCoibfeProductorIds.includes(productor.productor_id)
      )
      .forEach((productor) => {
        inserts.push(
          CoibfeProductors.prepareCreate((d) => {
            d._raw.id = productor.id.toString();
            // d.postId = productor.post_id.toString();
            d.body = productor.body;
            d.serverId = productor.id;

            d.dbversion = productor.dbversion;
            d.productorname = productor.productorname;
            d.productor_id = productor.productor_id;
            d.productortoken = productor.productortoken;
            d.productorsitrap = productor.productorsitrap;
            d.productoracreditacion = productor.productoracreditacion;
            d.productor_propriedad_id = productor.productor_propriedad_id;
            d.productorpassword = productor.productorpassword;
            d.productormail = productor.productormail;
            d.productorphone = productor.productorphone;
            d.productorissync = productor.productorissync;

            d.productordocnroprop = productor.productordocnroprop;
            d.productordocdigprop = productor.productordocdigprop;
            d.productordocorigabrev = productor.productordocorigabrev;
            d.productordoctipoabrev = productor.productordoctipoabrev;
            d.productorstatus = productor.productorstatus;
            d.productormessages = productor.productormessages;
            d.productorkeyprivate = productor.productorkeyprivate;
            d.productorapikeysoftware = productor.productorapikeysoftware;
          })
        );
      });
  } catch (e) {
    console.log('dumpError productor', e);
  }
  //-----------------------------------------------------------
  //-----------------------------------------------------------
  // TAKE ALL IDS RECEIVED
  try {
    const frigorificoIds = coibfefrigorificos.map(
      (frigorifico) => frigorifico.frigorifico_id
    );

    // TAKE ALL IDS DB
    const existingCoibfeFrigorificos = await CoibfeFrigorificos.query(
      Q.where('frigorifico_id', Q.oneOf(frigorificoIds))
    ).fetch();

    const existingCoibfeFrigorificoIds = existingCoibfeFrigorificos.map(
      (frigorifico) => frigorifico.frigorifico_id
    );

    coibfefrigorificos
      .filter(
        (frigorifico) =>
          !existingCoibfeFrigorificoIds.includes(frigorifico.frigorifico_id)
      )
      .forEach((frigorifico) => {
        inserts.push(
          CoibfeFrigorificos.prepareCreate((f) => {
            f._raw.id = frigorifico.id.toString();
            // f.postId = frigorifico.post_id.toString();
            f.body = frigorifico.body;
            f.serverId = frigorifico.id;

            f.dbversion = frigorifico.dbversion;
            f.frigorificoname = frigorifico.frigorificoname;
            f.frigorifico_id = frigorifico.frigorifico_id;
            f.frigorificodepartamento = frigorifico.frigorificodepartamento;
            f.frigorificokeyprivate = frigorifico.frigorificokeyprivate;
            f.frigorificostatus = frigorifico.frigorificostatus;
          })
        );
      });
  } catch (e) {
    console.log('dumpError frigorifico', e);
  }
  //-----------------------------------------------------------
  //-----------------------------------------------------------
  // TAKE ALL IDS RECEIVED
  try {
    const categoryIds = categoryusers.map((category) => category.key);

    // TAKE ALL IDS DB
    const existingUserCategorys = await UserCategorys.query(
      Q.where('key', Q.oneOf(categoryIds))
    ).fetch();

    const existingUserCategoryIds = existingUserCategorys.map(
      (category) => category.key
    );

    categoryusers
      .filter((category) => !existingUserCategoryIds.includes(category.key))
      .forEach((category: any) => {
        inserts.push(
          UserCategorys.prepareCreate((c) => {
            c._raw.id = category.id.toString();
            // c.postId = category.post_id.toString();
            c.serverId = category.id;

            c.user_id = category.user_id;
            c.key = category.key;
            c.title = category.title;
            c.name = category.name;
            c.address = category.address;
            c.price = category.price;
            c.description = category.description;
            c.photo = category.photo;
            c.star = category.star;
            c.reviews = category.reviews;
            c.category = category.category;
            c.img = category.img;
            c.other = category.other;
            c.dollar = category.dollar;
            c.cleaner = category.cleaner;
            c.users_category_sync = category.users_category_sync;
          })
        );
      });
  } catch (e) {
    console.log('dumpError userCategory', e);
  }
  //-----------------------------------------------------------
  //-----------------------------------------------------------
  // TAKE ALL IDS RECEIVED
  try {
    const generalIds = generals.map((general) => general.generalId);

    // TAKE ALL IDS DB
    const existingGenerals = await Generals.query(
      Q.where('generalId', Q.oneOf(generalIds))
    ).fetch();

    const existingGeneralIds = existingGenerals.map(
      (general) => general.generalId
    );

    generals
      .filter((general) => !existingGeneralIds.includes(general.generalId))
      .forEach((general: any) => {
        inserts.push(
          Generals.prepareCreate((g) => {
            g._raw.id = general.id.toString();
            // g.postId = general.post_id.toString();
            g.serverId = general.id;

            g.generalId = general.generalId;
            g.generalUniqueId = general.generalUniqueId;
            // ---------------------------------
            let general_vacunass = JSON.stringify(general.general_vacuna);
            general_vacunass = general_vacunass.split('"').join('');
            general_vacunass = general_vacunass.replace('[', '');
            general_vacunass = general_vacunass.replace(']', '');
            //console.log('PRODUCTORSS', general_vacunass);
            g.general_vacuna = general_vacunass;
            // ----------------------------------

            let general_razass = JSON.stringify(general.general_raza);
            general_razass = general_razass.split('"').join('');
            general_razass = general_razass.replace('[', '');
            general_razass = general_razass.replace(']', '');
            //console.log('PRODUCTORSS', general_razass);
            g.general_raza = general_razass;
            // ----------------------------------

            let general_classificacionss = JSON.stringify(
              general.general_classificacion
            );
            general_classificacionss = general_classificacionss
              .split('"')
              .join('');
            general_classificacionss = general_classificacionss.replace(
              '[',
              ''
            );
            general_classificacionss = general_classificacionss.replace(
              ']',
              ''
            );
            //console.log('PRODUCTORSS', general_classificacionss);
            g.general_classificacion = general_classificacionss;
            // ----------------------------------

            let general_dispositivoss = JSON.stringify(
              general.general_dispositivo
            );
            general_dispositivoss = general_dispositivoss.split('"').join('');
            general_dispositivoss = general_dispositivoss.replace('[', '');
            general_dispositivoss = general_dispositivoss.replace(']', '');
            //console.log('PRODUCTORSS', general_dispositivoss);
            g.general_dispositivo = general_dispositivoss;
            // ----------------------------------

            let general_colorss = JSON.stringify(general.general_color);
            general_colorss = general_colorss.split('"').join('');
            general_colorss = general_colorss.replace('[', '');
            general_colorss = general_colorss.replace(']', '');
            //console.log('PRODUCTORSS', general_colorss);
            g.general_color = general_colorss;
            // ----------------------------------

            let general_categoriass = JSON.stringify(general.general_categoria);
            general_categoriass = general_categoriass.split('"').join('');
            general_categoriass = general_categoriass.replace('[', '');
            general_categoriass = general_categoriass.replace(']', '');
            //console.log('PRODUCTORSS', general_categoriass);
            g.general_categoria = general_categoriass;
            // ----------------------------------

            let general_modalidadss = JSON.stringify(general.general_modalidad);
            general_modalidadss = general_modalidadss.split('"').join('');
            general_modalidadss = general_modalidadss.replace('[', '');
            general_modalidadss = general_modalidadss.replace(']', '');
            //console.log('PRODUCTORSS', general_modalidadss);
            g.general_modalidad = general_modalidadss;
            // ----------------------------------

            let general_destinoss = JSON.stringify(general.general_destino);
            general_destinoss = general_destinoss.split('"').join('');
            general_destinoss = general_destinoss.replace('[', '');
            general_destinoss = general_destinoss.replace(']', '');
            //console.log('PRODUCTORSS', general_destinoss);
            g.general_destino = general_destinoss;
            // ----------------------------------

            let general_permissionss = JSON.stringify(
              general.general_permission
            );
            general_permissionss = general_permissionss.split('"').join('');
            general_permissionss = general_permissionss.replace('[', '');
            general_permissionss = general_permissionss.replace(']', '');
            //console.log('PRODUCTORSS', general_permissionss);
            g.general_permission = general_permissionss;
            // ----------------------------------

            g.general_1 = general.general_1;
            g.general_2 = general.general_2;
            g.general_3 = general.general_3;
            g.general_4 = general.general_4;
            g.general_5 = general.general_5;
            g.general_6 = general.general_6;
            g.general_7 = general.general_7;
            g.general_8 = general.general_8;
            g.general_9 = general.general_9;
            g.general_10 = general.general_10;
            g.general_is_sync = general.general_is_sync;
            g.dbversion = general.dbversion;
          })
        );
      });
  } catch (e) {
    console.log('dumpError general', e);
  }
  //  //take propriedadprocutors
  //  //take propriedadprocutors
  //const propIds = coibfepropriedads.map(
  //  propriedad => propriedad.propriedadproductors,
  //);
  //all propriedads
  //const existingCoibfeProps = await CoibfePropriedads.query().fetch();
  /*
  const existingCoibfePropIds = existingCoibfeProps.map(
    propriedad => propriedad.propriedadsigor,
  );
*/
  //-----------------------------------------------------------
  //console.log('PRORPIEDADDUMP', existingCoibfeProps);

  // console.log('FRIGODB', CoibfeFrigorificos);
  // console.log('FRIGODUMP', coibfefrigorificos);

  // console.log('EXISTENTFRIGO', existingCoibfeFrigorificos);
  // console.log('EXIXTENTFRIGOID', existingCoibfeFrigorificoIds);
  // console.log('EXIXTENTPRODUCTORID', existingCoibfeProductorIds);
  // console.log('EXIXTENTPROPRIEDADID', existingCoibfePropriedadIds);

  await database.write(async () => {
    // console.log('PROPRI', coibfepropriedads);
    //console.log('ALL', inserts);
    await database.batch(...inserts);
  });
};

export default dump;
