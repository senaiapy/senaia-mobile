#/bin/sh

#graphql
{
    films {
    title
    director
    people {
      name
    }
  }
}

This will output (partial output here):

"data": {
    "films": [
      {
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
        "people": [
          {
            "name": "Colonel Muska"
          }
        ]
      },
      {
        "title": "My Neighbor Totoro",
        "director": "Hayao Miyazaki",
        "people": [
          {
            "name": "Satsuki Kusakabe"
          },
          {
            "name": "Mei Kusakabe"
          },
          {
            "name": "Tatsuo Kusakabe"
          },
          {
            "name": "Yasuko Kusakabe"
          },
          {
            "name": "Totoro"
          },
          {
            "name": "Catbus"
          },
          {
            "name": "Granny"
          },
          {
            "name": "Kanta Ogaki"
          }
        ]
      },
    ...
    ]
}

If you want to work on a specific object, you'll first need to get his ID:

{
    films {
    id
    title
  }
}

  "data": {
    "films": [
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky"
      },
      {
        "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
        "title": "Grave of the Fireflies"
      },
      {
        "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        "title": "My Neighbor Totoro"
      },
      {
        "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
        "title": "Kiki's Delivery Service"
      },
    ...
    ]
  }

Then query with the ID (for example, for "Castle in the Sky"):

{
    film(id:"2baf70d1-42bb-4437-b551-e5fed5a87abe") {
    title
    director
  }
}

{
  "data": {
    "film": {
      "title": "Castle in the Sky",
      "director": "Hayao Miyazaki"
    }
  }
}

