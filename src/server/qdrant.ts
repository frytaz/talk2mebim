import { QdrantClient } from '@qdrant/js-client-rest';

export const qdrant = new QdrantClient({ url: process.env.QDRANT_URL });