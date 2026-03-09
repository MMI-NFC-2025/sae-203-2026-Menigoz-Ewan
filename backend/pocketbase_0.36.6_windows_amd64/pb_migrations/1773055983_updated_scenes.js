/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1254289504")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "bool2380351263",
    "name": "accessible_pmr",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1254289504")

  // remove field
  collection.fields.removeById("bool2380351263")

  return app.save(collection)
})
