/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n0oend18x8vmdox")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h90yocg0",
    "name": "agent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "n9xh4bjxnmf22l8",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n0oend18x8vmdox")

  // remove
  collection.schema.removeField("h90yocg0")

  return dao.saveCollection(collection)
})
