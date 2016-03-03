package main

import (
	"log"
	"net/http"
	"html/template"
)

func main() {

	templates := template.Must(template.ParseFiles("templates/index.html"))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {

		if err := templates.ExecuteTemplate(w, "index.html", nil); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
		
		log.Println("Request handled successfully!!!!")
	})

	log.Fatal(http.ListenAndServe(":8080", nil))
}
