(defproject example "0.1.0"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/tools.reader "0.8.2"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [org.clojure/core.async "0.1.278.0-76b25b-alpha"]
                 [om "0.8.0-alpha2"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-pdo "0.1.1"]]

  :aliases {"up" ["pdo" "cljsbuild" "auto" "dev," "ring" "server-headless"]}

  :min-lein-version "2.0.0"
  :uberjar-name "example-standalone.jar"

  :ring {:handler example.core/app
         :init example.core/init}

  :source-paths ["src/clj"]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "release"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/app.js"
                                   :optimizations :advanced
                                   :pretty-print false
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]}}]})
