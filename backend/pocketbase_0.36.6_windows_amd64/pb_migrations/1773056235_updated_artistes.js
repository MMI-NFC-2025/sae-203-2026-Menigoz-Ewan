/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3341207218",
    "max": 0,
    "min": 0,
    "name": "biographie",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date314738842",
    "max": "",
    "min": "",
    "name": "date_passage",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file2141013404",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "image_principale",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "file290148519",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "galerie_photos",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "url3780381041",
    "name": "site_web",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1254289504",
    "hidden": false,
    "id": "relation375411636",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "scene_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "bool571495974",
    "name": "est_en_tete_d_affiche",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3183463462")

  // remove field
  collection.fields.removeById("text3341207218")

  // remove field
  collection.fields.removeById("date314738842")

  // remove field
  collection.fields.removeById("file2141013404")

  // remove field
  collection.fields.removeById("file290148519")

  // remove field
  collection.fields.removeById("url3780381041")

  // remove field
  collection.fields.removeById("relation375411636")

  // remove field
  collection.fields.removeById("bool571495974")

  return app.save(collection)
})
