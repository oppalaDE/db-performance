# Performance: MySQL vs MongoDB vs ArangoDB vs JavaScript

This project compares different database systems. [See blog article here](https://gen.tube/blog/performance-mysql-vs-mongodb-vs-arangodb-vs-javascript)

## Installation

1. Clone this git repository
1. Install docker desktop & Node.js
1. Run `docker compose up -d`, to create database containers (mysql, mongodb, arangodb)
1. Create mysql database (sql statements can be found at /db/db.js)
1. Run api (`npm install`, `npm start`)
1. Generate test data (POST http://localhost:6060/generate-test-data)
1. Run benchmark (GET http://localhost:6060/benchmark) (Check if all mongo database indexes are created, sometimes mongoose does not create it automatically)

## Benchmark results

### Test Calculation DateDiff
```
mysql-timestampdiff x 1.46 ops/sec ±6.96% (12 runs sampled), mean: 0.6834579826666666
mongo-datediff x 1.65 ops/sec ±7.41% (13 runs sampled), mean: 0.6057675030769231
arango-datediff x 1.62 ops/sec ±7.01% (13 runs sampled), mean: 0.6165715704615384
js-map-calculate x 79.51 ops/sec ±0.24% (69 runs sampled), mean: 0.012577574018840576
js-foreach-calculate x 80.95 ops/sec ±0.33% (71 runs sampled), mean: 0.01235354813802817
js-for-calculate x 83.30 ops/sec ±0.18% (73 runs sampled), mean: 0.01200490433150685
mysql-js-map-calculate x 1.75 ops/sec ±3.11% (13 runs sampled), mean: 0.5713856124615385
mysql-js-foreach-calculate x 1.83 ops/sec ±1.08% (14 runs sampled), mean: 0.5463724644285713
mysql-js-for-calculate x 1.81 ops/sec ±1.86% (13 runs sampled), mean: 0.5521283173076923
mongo-js-map-calculate x 1.97 ops/sec ±2.12% (14 runs sampled), mean: 0.5070700475000001
mongo-js-foreach-calculate x 1.96 ops/sec ±2.31% (14 runs sampled), mean: 0.5093444732857143
mongo-js-for-calculate x 1.95 ops/sec ±1.86% (14 runs sampled), mean: 0.5141313005
arango-js-map-calculate x 1.76 ops/sec ±2.96% (13 runs sampled), mean: 0.5697443813846154
arango-js-foreach-calculate x 1.78 ops/sec ±2.48% (13 runs sampled), mean: 0.5631842725384616
arango-js-for-calculate x 1.78 ops/sec ±2.22% (13 runs sampled), mean: 0.5630863109230769
mysql-index-timestampdiff x 292 ops/sec ±3.49% (71 runs sampled), mean: 0.003422740167531503
mongo-index-datediff x 251 ops/sec ±1.62% (72 runs sampled), mean: 0.00397784894488227
arango-index-datediff x 442 ops/sec ±1.32% (82 runs sampled), mean: 0.0022628268537195112
mysql-index-js-map-calculate x 295 ops/sec ±3.74% (67 runs sampled), mean: 0.0033864624746839968
mysql-index-js-foreach-calculate x 306 ops/sec ±4.66% (67 runs sampled), mean: 0.0032718146103656366
mysql-index-js-for-calculate x 285 ops/sec ±3.62% (67 runs sampled), mean: 0.0035057698583835202
mongo-index-js-map-calculate x 271 ops/sec ±1.85% (72 runs sampled), mean: 0.0036858964325651197
mongo-index-js-foreach-calculate x 277 ops/sec ±1.58% (74 runs sampled), mean: 0.0036050770008075306
mongo-index-js-for-calculate x 279 ops/sec ±1.78% (73 runs sampled), mean: 0.003578499422698916
arango-index-js-map-calculate x 430 ops/sec ±1.23% (78 runs sampled), mean: 0.0023256642415044257
arango-index-js-foreach-calculate x 435 ops/sec ±1.26% (78 runs sampled), mean: 0.002299336621383958
arango-index-js-for-calculate x 432 ops/sec ±1.49% (80 runs sampled), mean: 0.0023167010920187745
```

### Test Join Group Count
```
mysql-join-group x 18.03 ops/sec ±3.15% (83 runs sampled), mean: 0.0554481953253012
mysql-subselect x 21.87 ops/sec ±2.53% (55 runs sampled), mean: 0.0457299408909091
mongo-lookup-size x 1.63 ops/sec ±7.30% (13 runs sampled), mean: 0.6119131824615385
mongo-lookup-group x 4.72 ops/sec ±0.76% (27 runs sampled), mean: 0.2117857130740741
arango-join-length x 38.09 ops/sec ±3.32% (72 runs sampled), mean: 0.026255985824074072
arango-inverted-index-join-length x 320 ops/sec ±1.22% (81 runs sampled), mean: 0.003122843184943113
arango-join-collect x 38.57 ops/sec ±0.43% (62 runs sampled), mean: 0.02592500975806452
arango-inverted-index-join-collect x 319 ops/sec ±0.67% (80 runs sampled), mean: 0.0031320789302287577
js-group-mysql x 0.84 ops/sec ±2.09% (9 runs sampled), mean: 1.1872082036666667
js-group-mysql-grouped x 21.37 ops/sec ±2.74% (54 runs sampled), mean: 0.04678826383333335
js-group-mysql-n1 x 39.02 ops/sec ±1.69% (63 runs sampled), mean: 0.02562578691534392
js-group-mysql-n1-sync x 9.60 ops/sec ±0.83% (49 runs sampled), mean: 0.1042142933265306
js-group-mongo x 0.55 ops/sec ±1.89% (7 runs sampled), mean: 1.8043519402857142
js-group-mongo-grouped x 3.72 ops/sec ±2.39% (23 runs sampled), mean: 0.268822047173913
js-group-mongo-n1 x 25.72 ops/sec ±1.66% (63 runs sampled), mean: 0.038881897222222225
js-group-mongo-n1-sync x 6.73 ops/sec ±0.76% (36 runs sampled), mean: 0.1486225450833333
js-group-mongo-n1-cursor x 6.61 ops/sec ±1.54% (36 runs sampled), mean: 0.15124395594444442
js-group-arango x 0.94 ops/sec ±1.44% (9 runs sampled), mean: 1.063199361
js-group-arango-grouped x 9.54 ops/sec ±0.98% (49 runs sampled), mean: 0.10481237665306124
js-group-arango-n1 x 26.76 ops/sec ±0.86% (65 runs sampled), mean: 0.037364489084615406
js-group-arango-n1-sync x 11.67 ops/sec ±0.95% (57 runs sampled), mean: 0.08565743128070177
js-group-arango-n1-cursor x 27.04 ops/sec ±1.06% (65 runs sampled), mean: 0.03698360225384616
```

### Test Join Lookup
```
mysql-real-join x 314 ops/sec ±3.37% (70 runs sampled), mean: 0.003179970122510823
mongo-real-lookup x 122 ops/sec ±1.00% (80 runs sampled), mean: 0.008197701707142855
arango-real-join x 346 ops/sec ±0.90% (79 runs sampled), mean: 0.002887791545453793
```

### Test Array
```
mysql x 619 ops/sec ±2.46% (72 runs sampled), mean: 0.00161648348085297
mongo-array-size x 372 ops/sec ±1.70% (76 runs sampled), mean: 0.0026850888518826703
mongo-array-additional-field x 516 ops/sec ±1.36% (77 runs sampled), mean: 0.0019369441314481214
arango-subquery x 432 ops/sec ±1.25% (81 runs sampled), mean: 0.002316137275659169
arango-subtraversal x 246 ops/sec ±0.69% (82 runs sampled), mean: 0.004068192265746448
arango-array x 630 ops/sec ±0.92% (81 runs sampled), mean: 0.0015876764702804091
```