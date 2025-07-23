# Highcharts modules

**No exercise here, just a short reading:**

In general, loading modules in Highcharts sources works the same way as in regular TS project. The only exception is 3), however things may change when TreeShaking project will be completed (estimated Q2/Q3 2023).
___

## 1. Importing methods from revealing-module-pattern:

The most common use-case is to load utility methods from Utilities module. That module contains methods like `pick()`, `merge()` or `addEvent()`. Let’s take a look at the example:

```ts
// Import module
import U from '../path/to/Core/Utilities.js';

// Now choose required methods, for example defined() and pick():
const {
  defined,
  pick
} = U;

// Usage:
const myValue = null,
	isMyValueDefined = defined(myValue);
```

**Note: Please use alphabetical order or methods/properties**
___
## 2. Importing Core series:

In Highcharts project (as of 03.2023) we assume that all Core Series (eg Pie, Line, Column) are always available because users always load Highcharts’ main file. We import type and series through `SeriesRegistry`, which under the hood is a simple interface:

```ts
export interface SeriesTypeRegistry {
    [key: string]: typeof Series;
}
```

We have two ways to load a series:

a) The most commonly used:

```ts
import type ColumnSeriesType from '../path/to/Column/ColumnSeries';

import SeriesRegistry from '../path/to/Core/Series/SeriesRegistry.js';

const ColumnSeries: typeof ColumnSeriesType = SeriesRegistry.seriesTypes.column;
```

b) Alternative approach:

```ts
import SeriesRegistry from '../path/to/Core/Series/SeriesRegistry.js';

const {
    seriesTypes: {
        column: ColumnSeries
    }
} = SeriesRegistry;
```

Now, use it (using import from a) or b)):
```ts
// Create a new series:
class MySuperSeries extends ColumnSeries { // in inheritance
  public translate(): void {
    ColumnSeries.prototype.translate.apply(this, arguments); // prototype usage
  }
  …
}

// Register the series, so later other modules can import it:
SeriesRegistry.registerSeriesType(‘mysuperseries’, MySuperSeries);
```
___
## 3. Importing non-Core series (eg available in highcharts-more, or as a separate module, like Treemap):

**February 2023: use the same as 2).**

**Note**: Make sure you don’t load full series/module in a new module. For example if your new series is based on ItemSeries, make sure ItemSeries WAS NOT loaded into your module deliverable file (test it: https://code.highcharts.local/modules/my-module.js). As long as you follow 2a or 2b import, you should be safe.
___
## 4. Types importing

Sometimes we need to import types/interfaces. For example we write an adapter, or a module that transits the arguments, extends them etc, but does not require the module itself.  Common types/interfaces/classes imported by many modules: `Axis`, `Chart`, `Point`, `SVGElement`

```ts
import type BBoxObject from '../../Core/Renderer/BBoxObject';

// Let’s create a function which uses BBoxObject interface:
function getRandomBox(): BBoxObject {
  return {
    x: Math.random(),
    y: Math.random(),
    width: Math.random(),
    height: Math.random() 
  }
}

// Use:
const myBox = getRandomBox();
console.log(myBox.width); // Ok, no TS error!
```
