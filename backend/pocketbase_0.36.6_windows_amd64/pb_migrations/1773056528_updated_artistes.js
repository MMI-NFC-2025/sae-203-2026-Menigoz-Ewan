/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select2203071480",
    "maxSelect": 4,
    "name": "genre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "jazz",
      "fanfare",
      "musique de rue",
      "soul"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select2203071480",
    "maxSelect": 1,
    "name": "genre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "homme",
      "femme",
      "autre"
    ]
  }))

  return app.save(collection)
})
