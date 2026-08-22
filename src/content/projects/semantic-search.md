---
title: "Semantic Search"
shortTitle: "AI Vector Search Engine"
description: "An AI-powered search system translating keywords into meaning using vector embeddings and similarity index matching."
category: "Systems"
year: "2024"
featured: true
status: "Completed"
technologies:
  - Laravel
  - Python
  - Qdrant
  - OpenAI API
  - Vector Embeddings
  - FastAPI
heroImage: "/assets/images/semantic-search.png"
role: "Systems Architect"
order: 6
---

## The Problem
Traditional keyword search index systems (such as SQL `LIKE` queries or default database full-text indexes) are highly limited. They rely on literal string matching. If a user searches for "automobile mechanics," the database will fail to return entries containing "car repair shop" because the spelling differs, despite their identical semantic meanings.

## The Idea
Integrate vector search capabilities into traditional applications. This involves converting text content into dense mathematical vector representation (embeddings), storing those vectors in a dedicated vector database (Qdrant), and executing similarity queries to search by conceptual meaning rather than character matching.

## The Approach
Architect a decoupled, event-driven search bridge:
1. **Laravel Backend:** Houses the content, handles web requests, and fires update events.
2. **Python FastAPI Service:** Handles the heavy lifting of loading embedding models and converting text into vectors.
3. **Qdrant DB:** A high-performance vector search engine that stores embeddings and executes nearest-neighbor similarity searches.

## Engineering Architecture
```
[ Laravel App ] ---> [ Model Observer ] ---> [ Redis Queue ] ---> [ Python FastAPI ]
                                                                        |
[ Search Result ] <--- [ Cosine Similarity ] <--- [ Qdrant DB ] <-------+
```

### Event-Driven Sync
When records in the MySQL database change, Laravel Model Observers trigger a background worker. This worker calls our FastAPI service asynchronously, which converts the changed text to a 1536-dimensional vector using the OpenAI embedding API (or local sentence-transformer models) and writes the result to Qdrant.

### Semantic Queries
When a search is requested, the search query is converted into an embedding using the same model. The embedding is then sent to Qdrant, which performs a cosine similarity calculation against the document database, returning the top matches within milliseconds.

## Challenges & Solutions
* **Challenge:** Regenerating embeddings for large-scale table migrations during development caused API rate limits and long queues.
* **Solution:** We designed an asynchronous batch-processor in Python using asyncio, which queues database updates in memory and issues concurrent vector requests, improving sync speeds by 400%.

## Current Status
Successfully developed and verified. This architectural framework can be retrofitted into any relational database application to provide advanced, semantic query capabilities.
