(ns first-om.core
   (:require-macros [cljs.core.async.macros :refer [go]])
   (:require [om.core :as om :include-macros true]
             [om.dom :as dom :include-macros true]
             [cljs.core.async :refer [put! chan <!]]))


(def app-state
  (atom {:selected 0
           :speakers [
                 {:bio "BIO 1! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei."
                  :name "Speaker One" :company "Company A" :title "President" :image "images/speaker1.jpg" :selected true :arrow-pos "8%"},
                 {:bio "BIO 2! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei."
                  :name "Speaker Two" :company "Compayn B" :title "VP Marketing" :image "images/speaker2.jpg" :selected false :arrow-pos "28%"},
                 {:bio "BIO 3! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei."
                  :name "Speaker Three" :company "Compayn C" :title "Director of Operations" :image "images/speaker3.jpg" :selected false :arrow-pos "48%"},
                 {:bio "BIO 4! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei."
                  :name "Speaker Four" :company "Compayn D" :title "Supply Manager" :image "images/speaker4.jpg" :selected false :arrow-pos "68%"},
                 {:bio "BIO 5! Lorem ipsum dolor sit amet, cum hinc oporteat definitionem an, solet abhorreant nec in, suas tibique epicurei mea ne. Eum nulla vivendum temporibus eu, laoreet mentitum offendit ne his. Eu sea impetus pericula deseruisse, id cum unum dicat praesent. Meis tempor melius mei an, fugit tacimates mediocritatem sed at. Ut dicit simul graeco est, accusam molestiae no pri, an his singulis moderatius. Eripuit epicuri no pri, movet iudicabit at mei."
                  :name "Speaker Four" :company "Compayn E" :title "Founder & CEO" :image "images/speaker5.jpg" :selected false :arrow-pos "88%"}]}))


(defn thumb-class [speaker]
  (str "thumb" (when (:selected speaker) " selected")))

(defn speaker-view [speaker owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [index selected-chan]}]
             (dom/div #js {:className "sBox" }
                      (dom/div #js {:className (thumb-class speaker) :onClick (fn [e] (put! selected-chan @speaker))}
                          (dom/img #js {:src (:image speaker)}))
                      (dom/div #js {:className "title"}
                          (dom/div #js {:className "sname"} (:name speaker))
                          (dom/div #js {:className "scompany"} (:company speaker))
                          (dom/div #js {:className "stitle"} (:title speaker)))))))

(defn arrow-pos [position]
  (str (+ 8 (* 20 position)) "%"))

(defn set-selected [selection item]
  (if (= selection item) (assoc-in item [:selected] true) (assoc-in item [:selected] false)))


(defn speakers-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:selected (chan)})
    om/IWillMount
     (will-mount [_]
       (let [selected (om/get-state owner :selected)]
        (go (loop []
          (let [new-selection (<! selected)]
            (om/transact! app :speakers
              (fn [speakers] (vec (map #(set-selected new-selection %1) speakers))))
            (recur))))))

    om/IRenderState
    (render-state [this {:keys [selected]}]
            (dom/div #js {:id "content"}
            (dom/h1 nil "Featured Conference Speakers")
            (apply dom/div #js {:id "wireframe"}
                   (map #(om/build speaker-view %1 {:init-state {:selected-chan selected}}) (:speakers app)))
            (dom/div #js {:left (:arrow-pos (filter :selected (:speakers app))) :id "arrow"})
            (dom/div #js {:id "bio0"} (:bio (first (filter :selected (:speakers app)))))))))

(om/root speakers-view app-state
         {:target (. js/document (getElementById "body"))})



