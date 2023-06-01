package main

import (
	"fmt"
	"log"
	"net/http"
)

func serveFile(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	http.ServeFile(w, r, "./files/williamkristiansen.pdf")
}

func main() {
	fmt.Println("Server started on Port 8080")

	http.HandleFunc("/download", serveFile)

	log.Fatal(http.ListenAndServe(":8080", nil))
}
