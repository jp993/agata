(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{373:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"error-metrics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#error-metrics"}},[t._v("#")]),t._v(" Error metrics")]),t._v(" "),e("h2",{attrs:{id:"rmse"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rmse"}},[t._v("#")]),t._v(" rmse")]),t._v(" "),e("div",{staticClass:"language-MATLAB extra-class"},[e("pre",{pre:!0,attrs:{class:"language-matlab"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" rmse "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rmse")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dataHat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Function that computes the root mean squared error (RMSE) between two glucose traces (ignores nan values).")]),t._v(" "),e("h3",{attrs:{id:"inputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("data: timetable (required)")]),t._v(" "),e("br"),t._v("\nA timetable with columns "),e("code",[t._v("Time")]),t._v(" and "),e("code",[t._v("glucose")]),t._v(" containing the glucose data to analyze (mg/dl);")]),t._v(" "),e("li",[e("strong",[t._v("dataHat: timetable (required)")]),t._v(" "),e("br"),t._v("\nA timetable with columns "),e("code",[t._v("Time")]),t._v(" and "),e("code",[t._v("glucose")]),t._v(" containing the inferred glucose data (mg/dl) to comapre with "),e("code",[t._v("data")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"output"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" Output")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("rmse: double")]),t._v(" "),e("br"),t._v("\nThe computed root mean squared error (mg/dl).")])]),t._v(" "),e("h3",{attrs:{id:"preconditions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preconditions"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("data")]),t._v(" must be a timetable having an homogeneous time grid;")]),t._v(" "),e("li",[e("code",[t._v("dataHat")]),t._v(" must be a timetable having an homogeneous time grid;")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(" and "),e("code",[t._v("dataHat")]),t._v(" must start from the same timestamp;")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(" and "),e("code",[t._v("dataHat")]),t._v(" must end with the same timestamp;")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(" and "),e("code",[t._v("dataHat")]),t._v(" must have the same length.")])]),t._v(" "),e("h2",{attrs:{id:"cod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cod"}},[t._v("#")]),t._v(" cod")]),t._v(" "),e("div",{staticClass:"language-MATLAB extra-class"},[e("pre",{pre:!0,attrs:{class:"language-matlab"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" cod "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cod")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dataHat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Function that computes the coefficient of determination (COD) between two glucose traces (ignores nan values).")]),t._v(" "),e("h3",{attrs:{id:"inputs-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inputs-2"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("data: timetable (required)")]),t._v(" "),e("br"),t._v("\nA timetable with columns "),e("code",[t._v("Time")]),t._v(" and "),e("code",[t._v("glucose")]),t._v(" containing the glucose data to analyze (mg/dl);")]),t._v(" "),e("li",[e("strong",[t._v("dataHat: timetable (required)")]),t._v(" "),e("br"),t._v("\nA timetable with columns "),e("code",[t._v("Time")]),t._v(" and "),e("code",[t._v("glucose")]),t._v(" containing the inferred glucose data (mg/dl) to comapre with "),e("code",[t._v("data")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"output-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-2"}},[t._v("#")]),t._v(" Output")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("cod: double")]),t._v(" "),e("br"),t._v("\nThe computed coefficient of determination (%).")])]),t._v(" "),e("h3",{attrs:{id:"preconditions-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-2"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("data")]),t._v(" must be a timetable having an homogeneous time grid;")]),t._v(" "),e("li",[e("code",[t._v("dataHat")]),t._v(" must be a timetable having an homogeneous time grid;")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(" and "),e("code",[t._v("dataHat")]),t._v(" must start from the same timestamp;")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(" and "),e("code",[t._v("dataHat")]),t._v(" must end with the same timestamp;")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(" and "),e("code",[t._v("dataHat")]),t._v(" must have the same length.")])]),t._v(" "),e("h2",{attrs:{id:"mad"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mad"}},[t._v("#")]),t._v(" mad")]),t._v(" "),e("div",{staticClass:"language-MATLAB extra-class"},[e("pre",{pre:!0,attrs:{class:"language-matlab"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" mad "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mad")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dataHat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Function that computes the mean absolute difference (MAD) between two glucose traces (ignores nan values).")]),t._v(" "),e("h3",{attrs:{id:"inputs-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inputs-3"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("data: timetable (required)")]),t._v(" "),e("br"),t._v("\nA timetable with columns "),e("code",[t._v("Time")]),t._v(" and "),e("code",[t._v("glucose")]),t._v(" containing the glucose data to analyze (mg/dl);")]),t._v(" "),e("li",[e("strong",[t._v("dataHat: timetable (required)")]),t._v(" "),e("br"),t._v("\nA timetable with columns "),e("code",[t._v("Time")]),t._v(" and "),e("code",[t._v("glucose")]),t._v(" containing the inferred glucose data (mg/dl) to comapre with "),e("code",[t._v("data")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"output-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-3"}},[t._v("#")]),t._v(" Output")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("mad: double")]),t._v(" "),e("br"),t._v("\nThe mean absolute difference (MAD) (mg/dl).")])]),t._v(" "),e("h3",{attrs:{id:"preconditions-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-3"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("data")]),t._v(" must be a timetable having an homogeneous time grid;")]),t._v(" "),e("li",[e("code",[t._v("dataHat")]),t._v(" must be a timetable having an homogeneous time grid;")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(" and "),e("code",[t._v("dataHat")]),t._v(" must start from the same timestamp;")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(" and "),e("code",[t._v("dataHat")]),t._v(" must end with the same timestamp;")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(" and "),e("code",[t._v("dataHat")]),t._v(" must have the same length.")])]),t._v(" "),e("h2",{attrs:{id:"mard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mard"}},[t._v("#")]),t._v(" mard")]),t._v(" "),e("div",{staticClass:"language-MATLAB extra-class"},[e("pre",{pre:!0,attrs:{class:"language-matlab"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" mard "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mard")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dataHat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Function that computes the mean absolute relative difference (MARD) between two glucose traces (ignores nan values).")]),t._v(" "),e("h3",{attrs:{id:"inputs-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inputs-4"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("data: timetable (required)")]),t._v(" "),e("br"),t._v("\nA timetable with columns "),e("code",[t._v("Time")]),t._v(" and "),e("code",[t._v("glucose")]),t._v(" containing the glucose data to analyze (mg/dl);")]),t._v(" "),e("li",[e("strong",[t._v("dataHat: timetable (required)")]),t._v(" "),e("br"),t._v("\nA timetable with columns "),e("code",[t._v("Time")]),t._v(" and "),e("code",[t._v("glucose")]),t._v(" containing the inferred glucose data (mg/dl) to comapre with "),e("code",[t._v("data")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"output-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-4"}},[t._v("#")]),t._v(" Output")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("mard: double")]),t._v(" "),e("br"),t._v("\nThe mean absolute relative difference (MARD) (%).")])]),t._v(" "),e("h3",{attrs:{id:"preconditions-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-4"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("data")]),t._v(" must be a timetable having an homogeneous time grid;")]),t._v(" "),e("li",[e("code",[t._v("dataHat")]),t._v(" must be a timetable having an homogeneous time grid;")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(" and "),e("code",[t._v("dataHat")]),t._v(" must start from the same timestamp;")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(" and "),e("code",[t._v("dataHat")]),t._v(" must end with the same timestamp;")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(" and "),e("code",[t._v("dataHat")]),t._v(" must have the same length.")])]),t._v(" "),e("h2",{attrs:{id:"clarke"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clarke"}},[t._v("#")]),t._v(" clarke")]),t._v(" "),e("div",{staticClass:"language-MATLAB extra-class"},[e("pre",{pre:!0,attrs:{class:"language-matlab"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" results "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("clarke")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dataHat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Function that performs Clarke Error Grid Analysis (CEGA) (ignores nan values).")]),t._v(" "),e("h3",{attrs:{id:"inputs-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inputs-5"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("data: timetable (required)")]),t._v(" "),e("br"),t._v("\nA timetable with columns "),e("code",[t._v("Time")]),t._v(" and "),e("code",[t._v("glucose")]),t._v(" containing the glucose data to analyze (mg/dl);")]),t._v(" "),e("li",[e("strong",[t._v("dataHat: timetable (required)")]),t._v(" "),e("br"),t._v("\nA timetable with columns "),e("code",[t._v("Time")]),t._v(" and "),e("code",[t._v("glucose")]),t._v(" containing the inferred glucose data (mg/dl) to comapre with "),e("code",[t._v("data")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"output-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-5"}},[t._v("#")]),t._v(" Output")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("results: structure")]),t._v(" "),e("br"),t._v("\nA structure containing the results of the CEGA with fields:\n"),e("ul",[e("li",[e("code",[t._v("A")]),t._v(": the percentage of time spent in Zone A (%);")]),t._v(" "),e("li",[e("code",[t._v("B")]),t._v(": the percentage of time spent in Zone B (%);")]),t._v(" "),e("li",[e("code",[t._v("C")]),t._v(": the percentage of time spent in Zone C (%);")]),t._v(" "),e("li",[e("code",[t._v("D")]),t._v(": the percentage of time spent in Zone D (%);")]),t._v(" "),e("li",[e("code",[t._v("E")]),t._v(": the percentage of time spent in Zone E (%).")])])])]),t._v(" "),e("h3",{attrs:{id:"preconditions-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-5"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("data")]),t._v(" must be a timetable having an homogeneous time grid;")]),t._v(" "),e("li",[e("code",[t._v("dataHat")]),t._v(" must be a timetable having an homogeneous time grid;")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(" and "),e("code",[t._v("dataHat")]),t._v(" must start from the same timestamp;")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(" and "),e("code",[t._v("dataHat")]),t._v(" must end with the same timestamp;")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(" and "),e("code",[t._v("dataHat")]),t._v(" must have the same length.")])]),t._v(" "),e("h2",{attrs:{id:"timedelay"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#timedelay"}},[t._v("#")]),t._v(" timeDelay")]),t._v(" "),e("div",{staticClass:"language-MATLAB extra-class"},[e("pre",{pre:!0,attrs:{class:"language-matlab"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" timeDelay "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeDelay")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dataHat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Function that computes the time delay between two glucose traces (ignores nan values). The time delay is computed as the time shift necessary to maximize the correlation between the two traces.")]),t._v(" "),e("h3",{attrs:{id:"inputs-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inputs-6"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("data: timetable (required)")]),t._v(" "),e("br"),t._v("\nA timetable with columns "),e("code",[t._v("Time")]),t._v(" and "),e("code",[t._v("glucose")]),t._v(" containing the glucose data to analyze (mg/dl);")]),t._v(" "),e("li",[e("strong",[t._v("dataHat: timetable (required)")]),t._v(" "),e("br"),t._v("\nA timetable with columns "),e("code",[t._v("Time")]),t._v(" and "),e("code",[t._v("glucose")]),t._v(" containing the inferred glucose data (mg/dl) to comapre with "),e("code",[t._v("data")]),t._v(";")])]),t._v(" "),e("h3",{attrs:{id:"output-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-6"}},[t._v("#")]),t._v(" Output")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("timeDelay: double")]),t._v(" "),e("br"),t._v("\nThe computed time delay (min).")])]),t._v(" "),e("h3",{attrs:{id:"preconditions-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-6"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("data")]),t._v(" must be a timetable having an homogeneous time grid;")]),t._v(" "),e("li",[e("code",[t._v("dataHat")]),t._v(" must be a timetable having an homogeneous time grid;")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(" and "),e("code",[t._v("dataHat")]),t._v(" must start from the same timestamp;")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(" and "),e("code",[t._v("dataHat")]),t._v(" must end with the same timestamp;")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(" and "),e("code",[t._v("dataHat")]),t._v(" must have the same length.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);