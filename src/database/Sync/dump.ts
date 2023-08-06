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

  // console.log('CoibfePropriedads', CoibfePropriedads);
  // console.log('CoibfeProductors', CoibfeProductors);
  // console.log('CoibfeFrigorificos', CoibfeFrigorificos);
  // console.log('UserCategorys', UserCategorys);

  const {
    coibfepropriedads,
    coibfeproductors,
    coibfefrigorificos,
    categoryusers,
  } = await downloadDumpApi();

  // console.log('coibfepropriedads', coibfepropriedads);
  // console.log('coibfeproductors', coibfeproductors);
  // console.log('coibfeproductors', coibfeproductors);
  // console.log('categoryusers', categoryusers);

  const inserts: Model[] = [];

  //-----------------------------------------------------------
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

  //-----------------------------------------------------------
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

  //-----------------------------------------------------------
  // TAKE ALL IDS RECEIVED
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
  //-----------------------------------------------------------
  // TAKE ALL IDS RECEIVED
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
        UserCategorys.prepareCreate((f) => {
          f._raw.id = category.id.toString();
          // f.postId = category.post_id.toString();
          f.serverId = category.id;

          f.user_id = category.user_id;
          f.key = category.key;
          f.title = category.title;
          f.name = category.name;
          f.address = category.address;
          f.price = category.price;
          f.description = category.description;
          f.photo = category.photo;
          f.star = category.star;
          f.reviews = category.reviews;
          f.category = category.category;
          f.img = category.img;
          f.other = category.other;
          f.dollar = category.dollar;
          f.cleaner = category.cleaner;
          f.users_category_sync = category.users_category_sync;
        })
      );
    });
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
    // console.log('ALL', inserts);
    await database.batch(...inserts);
  });
};

export default dump;
