// @ts-nocheck
/* eslint-disable max-lines-per-function */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-08-17 13:35
// ########################################
// @ Modified time: 2022-08-17 13:03:35

import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import crudAxios from '@/services/crudAxios';

const crudQuery = () => {
  const [getId, setGetId] = useState('');
  const [getTitle, setGetTitle] = useState('');

  const [postTitle, setPostTitle] = useState('');
  const [postDescription, setPostDescription] = useState('');

  const [putId, setPutId] = useState('');
  const [putTitle, setPutTitle] = useState('');
  const [putDescription, setPutDescription] = useState('');
  const [putPublished, setPutPublished] = useState(false);

  const [deleteId, setDeleteId] = useState('');

  const [getResult, setGetResult] = useState<string | null>(null);
  const [postResult, setPostResult] = useState<string | null>(null);
  const [putResult, setPutResult] = useState<string | null>(null);
  const [deleteResult, setDeleteResult] = useState<string | null>(null);

  // -----------------------------------------------------------
  const fortmatResponse = (res: any) => {
    return JSON.stringify(res, null, 2);
  };
  // -----------------------------------------------------------

  const { isLoading: isLoadingItems, refetch: getAllItems } = useQuery<
    Item[],
    Error
  >(
    'query-Items',
    async () => {
      return await crudAxios.findAll();
    },
    {
      enabled: false,
      onSuccess: (res: any) => {
        setGetResult(fortmatResponse(res));
      },
      onError: (err: any) => {
        setGetResult(fortmatResponse(err.response?.data || err));
      },
    }
  );
  // -----------------------------------------------------------

  useEffect(() => {
    if (isLoadingItems) {
      setGetResult('loading...');
    }
  }, [isLoadingItems]);
  // -----------------------------------------------------------

  function getAllData() {
    try {
      getAllItems();
    } catch (err) {
      setGetResult(fortmatResponse(err));
    }
  }
  // -----------------------------------------------------------

  const { isLoading: isLoadingItem, refetch: getItemById } = useQuery<
    Item,
    Error
  >(
    'query-Item-by-id',
    async () => {
      return await crudAxios.findById(getId);
    },
    {
      enabled: false,
      retry: 1,
      onSuccess: (res: any) => {
        setGetResult(fortmatResponse(res));
      },
      onError: (err: any) => {
        setGetResult(fortmatResponse(err.response?.data || err));
      },
    }
  );
  // -----------------------------------------------------------

  useEffect(() => {
    if (isLoadingItem) {
      setGetResult('loading...');
    }
  }, [isLoadingItem]);

  function getDataById() {
    if (getId) {
      try {
        getItemById();
      } catch (err) {
        setGetResult(fortmatResponse(err));
      }
    }
  }
  // -----------------------------------------------------------

  const { isLoading: isSearchingItem, refetch: findItemsByTitle } = useQuery<
    Item[],
    Error
  >(
    'query-Items-by-title', // ["query-Items-by-title", getTitle],
    async () => {
      return await crudAxios.findByTitle(getTitle);
    },
    {
      enabled: false,
      retry: 1,
      onSuccess: (res: any) => {
        setGetResult(fortmatResponse(res));
      },
      onError: (err: any) => {
        setGetResult(fortmatResponse(err.response?.data || err));
      },
    }
  );
  // -----------------------------------------------------------

  useEffect(() => {
    if (isSearchingItem) {
      setGetResult('searching...');
    }
  }, [isSearchingItem]);

  function getDataByTitle() {
    if (getTitle) {
      try {
        findItemsByTitle();
      } catch (err) {
        setGetResult(fortmatResponse(err));
      }
    }
  }
  // -----------------------------------------------------------

  const { isLoading: isPostingItem, mutate: postItem } = useMutation<
    any,
    Error
  >(
    async () => {
      return await crudAxios.create({
        title: postTitle,
        description: postDescription,
      });
    },
    {
      onSuccess: (res: any) => {
        setPostResult(fortmatResponse(res));
      },
      onError: (err: any) => {
        setPostResult(fortmatResponse(err.response?.data || err));
      },
    }
  );
  // -----------------------------------------------------------

  useEffect(() => {
    if (isPostingItem) {
      setPostResult('posting...');
    }
  }, [isPostingItem]);

  function postData() {
    try {
      postItem();
    } catch (err) {
      setPostResult(fortmatResponse(err));
    }
  }
  // -----------------------------------------------------------

  const { isLoading: isUpdatingItem, mutate: updateItem } = useMutation<
    any,
    Error
  >(
    async () => {
      return await crudAxios.update(putId, {
        title: putTitle,
        description: putDescription,
        published: putPublished,
      });
    },
    {
      onSuccess: (res: any) => {
        setPutResult(fortmatResponse(res));
      },
      onError: (err: any) => {
        setPutResult(fortmatResponse(err.response?.data || err));
      },
    }
  );
  // -----------------------------------------------------------

  useEffect(() => {
    if (isUpdatingItem) {
      setPutResult('updating...');
    }
  }, [isUpdatingItem]);

  function putData() {
    if (putId) {
      try {
        updateItem();
      } catch (err) {
        setPutResult(fortmatResponse(err));
      }
    }
  }
  // -----------------------------------------------------------

  const { isLoading: isDeletingItems, mutate: deleteAllItems } = useMutation<
    any,
    Error
  >(
    async () => {
      return await crudAxios.deleteAll();
    },
    {
      onSuccess: (res: any) => {
        setDeleteResult(fortmatResponse(res));
      },
      onError: (err: any) => {
        setDeleteResult(fortmatResponse(err.response?.data || err));
      },
    }
  );
  // -----------------------------------------------------------

  useEffect(() => {
    if (isDeletingItems) {
      setDeleteResult('deleting...');
    }
  }, [isDeletingItems]);

  function deleteAllData() {
    try {
      deleteAllItems();
    } catch (err) {
      setDeleteResult(fortmatResponse(err));
    }
  }
  // -----------------------------------------------------------

  const { isLoading: isDeletingItem, mutate: deleteItem } = useMutation<
    any,
    Error
  >(
    async () => {
      return await crudAxios.deleteById(deleteId);
    },
    {
      onSuccess: (res: any) => {
        setDeleteResult(fortmatResponse(res));
      },
      onError: (err: any) => {
        setDeleteResult(fortmatResponse(err.response?.data || err));
      },
    }
  );
  // -----------------------------------------------------------

  useEffect(() => {
    if (isDeletingItem) {
      setDeleteResult('deleting...');
    }
  }, [isDeletingItem]);

  function deleteDataById() {
    if (deleteId) {
      try {
        deleteItem();
      } catch (err) {
        setDeleteResult(fortmatResponse(err));
      }
    }
  }
  // -----------------------------------------------------------

  const clearGetOutput = () => {
    setGetResult(null);
  };

  const clearPostOutput = () => {
    setPostResult(null);
  };

  const clearPutOutput = () => {
    setPutResult(null);
  };

  const clearDeleteOutput = () => {
    setDeleteResult(null);
  };
  // -----------------------------------------------------------

  /*
  return (
    <div id="app" className="container my-3">
      <h3>React Query Axios Typescript example</h3>

      <div className="card mt-3">
        <div className="card-header">React Query Axios Typescript GET - PYfoundation.org</div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <button className="btn btn-sm btn-primary" onClick={getAllData}>
              Get All
            </button>

            <input
              type="text"
              value={getId}
              onChange={(e: { target: { value: any; }; }) => setGetId(e.target.value)}
              className="form-control ml-2"
              placeholder="Id"
            />
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary" onClick={getDataById}>
                Get by Id
              </button>
            </div>

            <input
              type="text"
              value={getTitle}
              onChange={(e: { target: { value: any; }; }) => setGetTitle(e.target.value)}
              className="form-control ml-2"
              placeholder="Title"
            />
            <div className="input-group-append">
              <button
                className="btn btn-sm btn-primary"
                onClick={getDataByTitle}
              >
                Find By Title
              </button>
            </div>

            <button
              className="btn btn-sm btn-warning ml-2"
              onClick={clearGetOutput}
            >
              Clear
            </button>
          </div>

          {getResult && (
            <div className="alert alert-secondary mt-2" role="alert">
              <pre>{getResult}</pre>
            </div>
          )}
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-header">React Query Axios Typescript POST - PYfoundation.org</div>
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              value={postTitle}
              onChange={(e: { target: { value: any; }; }) => setPostTitle(e.target.value)}
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={postDescription}
              onChange={(e: { target: { value: any; }; }) => setPostDescription(e.target.value)}
              className="form-control"
              placeholder="Description"
            />
          </div>
          <button className="btn btn-sm btn-primary" onClick={postData}>
            Post Data
          </button>
          <button
            className="btn btn-sm btn-warning ml-2"
            onClick={clearPostOutput}
          >
            Clear
          </button>

          {postResult && (
            <div className="alert alert-secondary mt-2" role="alert">
              <pre>{postResult}</pre>
            </div>
          )}
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-header">React Query Axios Typescript PUT - PYfoundation.org</div>
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              value={putId}
              onChange={(e: { target: { value: any; }; }) => setPutId(e.target.value)}
              className="form-control"
              placeholder="Id"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={putTitle}
              onChange={(e: { target: { value: any; }; }) => setPutTitle(e.target.value)}
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={putDescription}
              onChange={(e: { target: { value: any; }; }) => setPutDescription(e.target.value)}
              className="form-control"
              placeholder="Description"
            />
          </div>
          <div className="form-check mb-2">
            <input
              type="checkbox"
              name="putPublished"
              checked={putPublished}
              onChange={(e: { target: { checked: any; }; }) => setPutPublished(e.target.checked)}
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="putPublished">
              Publish
            </label>
          </div>
          <button className="btn btn-sm btn-primary" onClick={putData}>
            Update Data
          </button>
          <button
            className="btn btn-sm btn-warning ml-2"
            onClick={clearPutOutput}
          >
            Clear
          </button>

          {putResult && (
            <div className="alert alert-secondary mt-2" role="alert">
              <pre>{putResult}</pre>
            </div>
          )}
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-header">
          React Query Axios Typescript DELETE - PYfoundation.org
        </div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <button className="btn btn-sm btn-danger" onClick={deleteAllData}>
              Delete All
            </button>

            <input
              type="text"
              value={deleteId}
              onChange={(e: { target: { value: any; }; }) => setDeleteId(e.target.value)}
              className="form-control ml-2"
              placeholder="Id"
            />
            <div className="input-group-append">
              <button
                className="btn btn-sm btn-danger"
                onClick={deleteDataById}
              >
                Delete by Id
              </button>
            </div>

            <button
              className="btn btn-sm btn-warning ml-2"
              onClick={clearDeleteOutput}
            >
              Clear
            </button>
          </div>

          {deleteResult && (
            <div className="alert alert-secondary mt-2" role="alert">
              <pre>{deleteResult}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
  */
};

export default crudQuery;
