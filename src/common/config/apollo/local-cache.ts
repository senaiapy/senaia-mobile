import { gql, InMemoryCache } from '@apollo/client';

export const localCache = new InMemoryCache({
  typePolicies: {
    Character: {
      fields: {
        chosenQuantity: {
          read(chosenQuantity) {
            if (chosenQuantity === undefined || chosenQuantity === null) {
              return 0;
            }
            return chosenQuantity;
          },
        },
        unitPrice: {
          read(_, { readField }) {
            const charName = readField('name');
            switch (charName) {
              case 'PLAN FAmiliar':
                return 150000;
              case 'PLAN Medio':
              case 'PLAN Basico':
                return 100000;

              default:
                return 50000;
            }
          },
        },
      },
    },
  },
});

export const LocalCacheInitQuery = gql`
  query LocalCacheInit {
    shoppingCart
  }
`;

export function initialLocalCache() {
  localCache.writeQuery({
    query: LocalCacheInitQuery,
    data: {
      shoppingCart: null,
    },
  });
}
