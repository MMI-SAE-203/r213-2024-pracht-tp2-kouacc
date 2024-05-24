import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

// Copier ici les fonctions developpées en R214 | Système d'information

export async function allMaisons() {
  const records = await pb.collection('maison').getFullList()
  return records
}

export async function oneID(id) {
  const record = await pb.collection('maison').getOne(id)
  return record
}

export async function allMaisonsFavori() {
  const records = await pb.collection('maison').getFullList({ filter: 'favori = true' })
  return records
}

export async function allMaisonSorted() {
  const records = await pb.collection('maison').getFullList({ sort: '+prix' })
  return records
}

export async function bySurface(surface) {
  const records = await pb.collection('maison').getFullList({ filter: `surface > ${surface}` })
  return records
}

export async function surfaceORprice(surface, prix) {
  const records = await pb
    .collection('maison')
    .getFullList({ filter: `surface > ${surface} || prix < ${prix}` })
  return records
}

export async function allAgentsSorted() {
  const records = await pb.collection('agents').getFullList()
  return records
}

export async function infoAgent(id) {
  const record = await pb.collection('agents').getOne(id)
  return record
}

export async function maisonsAgent(agentid) {
  const records = await pb.collection('maison').getFullList({
    filter: `agent = '${agentid}'`,
  })
  return records
}
