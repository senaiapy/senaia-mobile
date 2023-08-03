// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
// @ Modified time: 2022-02-10 19:03:35

export * from './APIProvider';
export * from './Obj/useCreateObj';
export * from './Obj/useDeleteObj';
export * from './Obj/useGetObj';
export * from './Obj/useGetObjs';
export * from './Obj/useModifyObj';

/*----------------------------------------------------------------
//env
API_URL=https://60520252fb49dc00175b74f7.mockapi.io

import { Env } from '@env';
import {
  useGetObj,
  useGetObjs,
  useCreateObj,
  useModifyObj,
  useDeleteObj,
} from'@/services/crudQuery';

type ObjType = {
  label: string;
  done: boolean;
  color: string;
};

interface ObjDetailsProps {
  objId: number;
}

----------init use

  const endpoint = 'tasks';
  const objID = objId;
  data = {label: 'services', done: true, color: 'green'}
  const {data, isLoading} = useGetObjs<ObjType>(endpoint);
  const {data, isLoading} = useGetObj<ObjType>(endpoint, objID);
  const {data, isLoading} = useCreateObj<ObjType>(endpoint, data);
  const {data, isLoading} = useDeleteObj<ObjType>(endpoint, objID);
  const {data, isLoading} = useModifyObj<ObjType>(endpoint, objID, data);

*/
