# Customization exercise 01

#### New Series:

Using the series from exercise [Series events](https://github.com/blacklabel/highcharts-events/tree/main/exercises/03-series-events), build a new series in Highcharts.

#### Tasks:
- [ ] - Discuss with the teacher:
  - [ ] - Inheritance chain in Highcharts Core
  - [ ] - Public/Private/Static methods/properties
  - [ ] - Building API locally, inheritance chain in API options, deprecation
- [ ] - Create a new series type
  - [ ] - Move rendering `target` from Events, to a new series type, using inheritance model
  - [ ] - Replace all `addEvent()`'s with class functions overwides
  - [ ] - Add new option: `series.target`, which will hold default styling for each target:
    - [ ] - `fill`
    - [ ] - `stroke-width`
    - [ ] - `stroke`
    - [ ] - `stroke-dasharray`
- [ ] - Create an official demo in `samples/highcharts/demo`
- [ ] - Create a sample with configured `series.target` in `samples/highcharts/series-custom`
- [ ] - Create QUnit tests in `samples/unit-tests/series-custom`:
  - [ ] - test if adding/removing a point works
  - [ ] - test if updating the target works (change the terget's fill)
  - [ ] - test if stacking works (correct `target` position)
- [ ] - Create documentation (`docs/chart-and-series-types/series-custom.md`) file
    - [ ] - include the official demo and the sample with `series.target`
    - [ ] - describe the new series
    - [ ] - describe all new options implemented in the series
- [ ] - Verify generated API:
  - [ ] - make sure "required" module is not missing, and "since" values are correct
  - [ ] - remove unnecessary options using `exclude`
  - [ ] - add `data.target` and `series.target` configs to API

If anything in the description is unclear, contact the teacher