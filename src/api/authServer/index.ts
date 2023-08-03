// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function serverSignIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
        user: {
          name: 'Marcelo',
          email: 'marcelu.phd@gmail.com',
        },
      });
    }, 2000);
  });
}
