
## chartbot API


### GET a pie chart

Pie charts have the following fields:

`title` - Title of the report

`datasets` - An array of statistics. Each one has a `name` and a numeric `value`.

`GET https://api.noopschallenge.com/chartbot?type=pie`

`HTTP 200`

```
{
  "title": "Median Mood",
  "datasets": [
    { "name": "enthralled", "value": 1345 },
    { "name": "supported", "value": 528 },
    { "name": "not", "value": 748 },
    { "name": "irritated", "value": 1625 },
    { "name": "astonished", "value": 418 }
  ],
  "type": "pie"
}
```


### GET a time chart

Time charts have the following fields:

`title` - Title of the report

`interval` - The time interval used in reporting. One of 'year', 'quarter', 'month', or 'week',

`periods` - The periods included in the report

`datasets` - An array of statistics. Each one has a `name` and an array of `data`.

Each entry in the `data` array has a `period` (that matches the list of periods above) and a `value`.


`GET https://api.noopschallenge.com/chartbot?type=time`

`HTTP 200`

```
{
  "title": "Weekly Most Desirable Occupations Report",
  "interval": "week",
  "periods": [
    "2019-04-28",
    "2019-05-05",
    "2019-05-12",
    "2019-05-19",
    "2019-05-26",
    "2019-06-02",
    "2019-06-09",
    "2019-06-16",
    "2019-06-23",
    "2019-06-30"
  ],
  "datasets": [
    {
      "name": "radiologic technician",
      "data": [
        { "period": "2019-04-28", "value": 331 },
        { "period": "2019-05-05", "value": 332 },
        { "period": "2019-05-12", "value": 356 },
        { "period": "2019-05-19", "value": 381 },
        { "period": "2019-05-26", "value": 373 },
        { "period": "2019-06-02", "value": 361 },
        { "period": "2019-06-09", "value": 373 },
        { "period": "2019-06-16", "value": 368 },
        { "period": "2019-06-23", "value": 371 },
        { "period": "2019-06-30", "value": 361 }
      ]
    },
    {
      "name": "choreographer",
      "data": [
        { "period": "2019-04-28", "value": 355 },
        { "period": "2019-05-05", "value": 413 },
        { "period": "2019-05-12", "value": 464 },
        { "period": "2019-05-19", "value": 498 },
        { "period": "2019-05-26", "value": 495 },
        { "period": "2019-06-02", "value": 534 },
        { "period": "2019-06-09", "value": 539 },
        { "period": "2019-06-16", "value": 516 },
        { "period": "2019-06-23", "value": 477 },
        { "period": "2019-06-30", "value": 429 }
      ]
    },
    {
      "name": "paperhanger",
      "data": [
        { "period": "2019-04-28", "value": 193 },
        { "period": "2019-05-05", "value": 170 },
        { "period": "2019-05-12", "value": 152 },
        { "period": "2019-05-19", "value": 151 },
        { "period": "2019-05-26", "value": 145 },
        { "period": "2019-06-02", "value": 144 },
        { "period": "2019-06-09", "value": 145 },
        { "period": "2019-06-16", "value": 148 },
        { "period": "2019-06-23", "value": 150 },
        { "period": "2019-06-30", "value": 141 }
      ]
    },
    {
      "name": "printing press operator",
      "data": [
        { "period": "2019-04-28", "value": 199 },
        { "period": "2019-05-05", "value": 224 },
        { "period": "2019-05-12", "value": 228 },
        { "period": "2019-05-19", "value": 246 },
        { "period": "2019-05-26", "value": 262 },
        { "period": "2019-06-02", "value": 286 },
        { "period": "2019-06-09", "value": 311 },
        { "period": "2019-06-16", "value": 344 },
        { "period": "2019-06-23", "value": 346 },
        { "period": "2019-06-30", "value": 363 }
      ]
    }
  ],
  "type": "time"
}
```


### GET a random chart

`GET https://api.noopschallenge.com/chartbot`

`HTTP 200`

```
{
  "title": "Performance By Region",
  "datasets": [
    { "name": "El Monte, California", "value": 901 },
    { "name": "South Bend, Indiana", "value": 352 },
    { "name": "Lawrence, Indiana", "value": 913 }
  ],
  "type": "pie"
}
```

