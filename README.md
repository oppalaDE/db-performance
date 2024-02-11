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

## Cache Benchmark Results

After the `foxx/index.js` is uploaded to Arango (`Services > Add Service > Upload`), it is possible to run cache benchmark (GET http://localhost:6060/benchmark-cache) to get a normal Express endpoint, compare with an Express endpoint with apicache and a Foxx endpoint (running directly on the Arangodb server).

```
normal-endpoint-1500 x 198 ops/sec ±5.31% (66 runs sampled), mean: 0.005059091363502212, min: 0.0030529289411764704, max: 0.008494055533333333
apicache-1500 x 239 ops/sec ±5.37% (64 runs sampled), mean: 0.004186898501713457, min: 0.002686408761904762, max: 0.00666099475
apicache cleared
foxx-normal-1500 x 225 ops/sec ±11.68% (53 runs sampled), mean: 0.004444197371994883, min: 0.002350943181818182, max: 0.011694175
normal-endpoint-1000 x 170 ops/sec ±3.61% (64 runs sampled), mean: 0.005881316111198696, min: 0.004044285307692307, max: 0.007480849307692308
apicache-1000 x 251 ops/sec ±10.68% (60 runs sampled), mean: 0.003984414631375938, min: 0.0009257939454545454, max: 0.006897863636363636
apicache cleared
foxx-normal-1000 x 210 ops/sec ±11.36% (50 runs sampled), mean: 0.004758395103295455, min: 0.0023967102272727274, max: 0.014461573
normal-endpoint-200 x 171 ops/sec ±7.19% (45 runs sampled), mean: 0.005861501133245148, min: 0.002800511904761905, max: 0.009052291666666667
apicache-200 x 578 ops/sec ±23.21% (73 runs sampled), mean: 0.001728663552360304, min: 0.0008798692586206896, max: 0.007205836133333333
apicache cleared
foxx-normal-200 x 214 ops/sec ±8.85% (52 runs sampled), mean: 0.004679952741119909, min: 0.0025429646, max: 0.00807461665
normal-endpoint-slow x 10.81 ops/sec ±6.11% (55 runs sampled), mean: 0.09247199094545454, min: 0.087006916, max: 0.246066125
apicache-slow x 588 ops/sec ±135.60% (78 runs sampled), mean: 0.0017013413845445551, min: 0.00043452529059829055, max: 0.092322958
apicache cleared
foxx-normal-slow x 11.02 ops/sec ±2.60% (56 runs sampled), mean: 0.09073608921428573, min: 0.086291625, max: 0.134830291
```

## Connection Pool Benchmark Results

The following results show how the size of the connection pool affects the performance of the queries. In these test cases the queries are running concurrently.

```
query-2-pool-3 x 571 ops/sec ±9.76% (62 runs sampled), mean: 0.0017513568954729839, min: 0.0010614157916666667, max: 0.0037933884705882354
query-2-pool-10 x 351 ops/sec ±9.53% (48 runs sampled), mean: 0.0028456037346866092, min: 0.0013266239487179487, max: 0.005306341897435897
query-5-pool-3 x 460 ops/sec ±1.37% (81 runs sampled), mean: 0.0021717936802483208, min: 0.0019298413461538463, max: 0.0026885625
query-5-pool-10 x 470 ops/sec ±2.91% (78 runs sampled), mean: 0.0021263000622746124, min: 0.0018703046206896552, max: 0.0036843824285714287
query-8-pool-3 x 334 ops/sec ±3.57% (82 runs sampled), mean: 0.0029984553088138275, min: 0.002723785105263158, max: 0.007067146894736843
query-8-pool-10 x 393 ops/sec ±1.64% (75 runs sampled), mean: 0.0025441630208, min: 0.00220661332, max: 0.003015925
query-25-pool-3 x 130 ops/sec ±0.78% (87 runs sampled), mean: 0.007708698824302134, min: 0.007178095285714286, max: 0.008579202428571428
query-25-pool-25 x 209 ops/sec ±1.35% (80 runs sampled), mean: 0.00478485723061626, min: 0.004151407, max: 0.00588028475
query-40-pool-3 x 85.21 ops/sec ±0.74% (81 runs sampled), mean: 0.011735368197530868, min: 0.011145925, max: 0.0128107334
query-40-pool-25 x 143 ops/sec ±1.27% (79 runs sampled), mean: 0.00701289490242616, min: 0.006058425888888889, max: 0.0087319375
query-1 x 658 ops/sec ±14.82% (44 runs sampled), mean: 0.001520574364890108, min: 0.0006775523648648649, max: 0.003394961716216216
query-2 x 476 ops/sec ±9.45% (43 runs sampled), mean: 0.0021029962269220265, min: 0.0008359112131147541, max: 0.003421936475409836
query-3 x 506 ops/sec ±9.50% (49 runs sampled), mean: 0.0019747988369365325, min: 0.0009949130689655172, max: 0.0030956274000000002
query-4 x 588 ops/sec ±12.43% (55 runs sampled), mean: 0.0017001148851088141, min: 0.0008058468088235293, max: 0.003633420260869565
query-5 x 707 ops/sec ±13.91% (50 runs sampled), mean: 0.001414246023372549, min: 0.00077424325, max: 0.0032509589558823533
query-6 x 420 ops/sec ±8.41% (52 runs sampled), mean: 0.0023783408284758388, min: 0.0011935168510638298, max: 0.0037950625000000003
query-7 x 562 ops/sec ±12.56% (42 runs sampled), mean: 0.0017794173500717478, min: 0.0007371083285714286, max: 0.0045943599090909094
query-8 x 672 ops/sec ±12.61% (56 runs sampled), mean: 0.0014881290381843584, min: 0.0007578223088235294, max: 0.0035816691176470588
```

```
slow-query-2-pool-3 x 9.63 ops/sec ±3.12% (49 runs sampled), mean: 0.10379977295918368, min: 0.08777775, max: 0.135598083
slow-query-2-pool-10 x 9.97 ops/sec ±3.20% (50 runs sampled), mean: 0.10031932760000002, min: 0.087607625, max: 0.129528917
slow-query-5-pool-3 x 5.34 ops/sec ±1.72% (30 runs sampled), mean: 0.18722480569999997, min: 0.178043958, max: 0.217276875
slow-query-5-pool-10 x 6.43 ops/sec ±2.28% (35 runs sampled), mean: 0.1554912536, min: 0.12682675, max: 0.175627042
slow-query-8-pool-3 x 3.63 ops/sec ±1.13% (22 runs sampled), mean: 0.2752837613636363, min: 0.267746542, max: 0.296147166
slow-query-8-pool-10 x 5.00 ops/sec ±2.07% (28 runs sampled), mean: 0.20004346885714286, min: 0.179407792, max: 0.225446458
slow-query-1 x 11.65 ops/sec ±0.26% (57 runs sampled), mean: 0.08584883775438594, min: 0.084849625, max: 0.089599666
slow-query-2 x 11.54 ops/sec ±0.23% (57 runs sampled), mean: 0.08661858112280701, min: 0.08538475, max: 0.088505416
slow-query-3 x 11.69 ops/sec ±0.24% (58 runs sampled), mean: 0.08552880031034484, min: 0.084712375, max: 0.088407084
slow-query-4 x 11.59 ops/sec ±0.25% (57 runs sampled), mean: 0.08629989773684209, min: 0.08515875, max: 0.090091042
slow-query-5 x 11.64 ops/sec ±0.27% (57 runs sampled), mean: 0.08593723822807019, min: 0.085090667, max: 0.088826625
slow-query-6 x 11.73 ops/sec ±0.24% (58 runs sampled), mean: 0.08528695841379308, min: 0.084493708, max: 0.08955525
slow-query-7 x 11.67 ops/sec ±0.26% (57 runs sampled), mean: 0.08569253142105261, min: 0.084848209, max: 0.090221667
slow-query-8 x 11.70 ops/sec ±0.20% (58 runs sampled), mean: 0.08546982253448278, min: 0.08453125, max: 0.088509083
```

## Transaction Benchmark Results

[See blog article about different transactions here](https://gen.tube/blog/datenbank-transaktionen-arangodb)

```
arango-javascript-transaction x 691 ops/sec ±5.65% (69 runs sampled), mean: 0.0014476524790174832
arango-stream-transaction x 228 ops/sec ±2.14% (72 runs sampled), mean: 0.004388068339261664
arango-implicit-transaction x 839 ops/sec ±5.03% (68 runs sampled), mean: 0.0011925278973168212
```

```
arango-javascript-single-step-transaction x 1,246 ops/sec ±14.76% (58 runs sampled), mean: 0.00080264402201132
arango-stream-single-step-transaction x 656 ops/sec ±3.43% (61 runs sampled), mean: 0.0015243980708785202
arango-implicit-single-step-transaction x 1,741 ops/sec ±3.88% (63 runs sampled), mean: 0.0005742805439789954
```
