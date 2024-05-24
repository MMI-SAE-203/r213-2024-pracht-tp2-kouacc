/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n9xh4bjxnmf22l8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fek3xmg7",
    "name": "email",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n9xh4bjxnmf22l8")

  // remove
  collection.schema.removeField("fek3xmg7")

  return dao.saveCollection(collection)
})
