using Cassette;
using Cassette.Scripts;
using Cassette.Stylesheets;

namespace BrockSolutions.Applications.WebClient
{
    /// <summary>
    /// Configures the Cassette asset bundles for the web application.
    /// </summary>
    public class CassetteBundleConfiguration : IConfiguration<BundleCollection>
    {
        public void Configure(BundleCollection bundles)
        {
            bundles.Add<StylesheetBundle>("styles",
                new[] {
                    "~/Common/Css/SWCCommon.css",
                    "~/Common/Css/style.css",
                    "~/Common/Css/jquery-ui/jquery-ui.css",
                    "~/Common/Css/jquery-ui/jquery.autocomplete.css",
                    "~/Common/Css/jquery-ui/jgrid_style.css",
                    "~/Common/Css/jquery-ui/dataTables.jqueryui.css",
                    "~/Common/Css/Select2/select2.css",
                    "~/Common/Css/Tabs.css"
                });
            bundles.Add<ScriptBundle>("/vendor/modernizr",
                new[] {
                    "~/js/vendor/modernizr.custom.js",
                    "~/Common/Js/browser-detect.js"
                });

            bundles.Add<ScriptBundle>("core",
                          new[]
                              {
                                  "~/js/vendor/jquery.js",
                                  "~/js/vendor/jquery-ui.js",
                                  "~/js/vendor/jquery.cluetip.js",
                                  "~/js/vendor/jquery.collapser.min.js",
                                  "~/js/vendor/jquery.dataTables.min.js",
                                  "~/js/vendor/dataTables.jqueryui.js",
                                  "~/js/vendor/jquery.dataTables.grouping.js",
                                  "~/js/vendor/jquery.dataTables.extensions.js",
                                  "~/js/vendor/jquery.tablesorter.js",
                                  "~/js/vendor/jquery.ui.datepicker-en.js",
                                  "~/js/vendor/jquery.ui.datepicker-es.js",
                                  "~/js/vendor/select2.min.js",
                                  "~/js/vendor/table2CSV.js",
                                  "~/js/vendor/jquery.jqplot.min.js",
                                  "~/js/vendor/jqplot.barRenderer.min.js",
                                  "~/js/vendor/jqplot.canvasAxisLabelRenderer.min.js",
                                  "~/js/vendor/jqplot.canvasTextRenderer.min.js",
                                  "~/js/vendor/jqplot.categoryAxisRenderer.min.js",
                                  "~/Common/Js/picnet.table.filter.min.js",
                                  "~/Common/Js/json.js",
                                  "~/Common/Js/Autocomplete/CarrierAutoComplete.js",
                                  "~/Common/Js/Autocomplete/AirportAutoComplete.js",
                                  "~/Common/Js/Autocomplete/FacilityAutoComplete.js",
                                  "~/Common/Js/autocomplete.js",
                                  "~/Common/Js/jQuery/v1.11.1/jquery.bgiframe.js",
                                  "~/Common/Js/popup.js",
                                  "~/Common/Js/boxover.js",
                                  "~/Common/Js/brockNameSpace.js",
                                  "~/Common/Js/brock/brock.tooltip.js"
                              });

            bundles.AddPerSubDirectory<ScriptBundle>("dist/src");


        }
    }
}