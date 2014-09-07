/**
 * Dictionary er en enkel klasse som gir mulighet til å søke i en liste av ord. 
 * 
 * Den er konstruert fra en tabell av tekststrenger. På engelsk kaller man 
 * det for "an array of strings":
 * 
 *   var data = ["a", "bad", "cat", "dog"];
 *   var dict = new Dictionary(data);
 *
 * Når ordboken er instansiert, dvs. det er laget en instans av klassen i 
 * minne på den maskinen som nettleseren utføres på, kan man utføre et
 * enkelt søk i denne ordboken. Hvis vi bruker vårt eksempel videre, så
 * kan man gjøre et søk på følgende måte:
 *
 *   dict.search("a") => ["a", "bad", "cat"]
 *
 * @param ord for ordboken
 * @returns en instansiert ordbok
 */
var Dictionary = function(words) {

	/**
	 * Søker gjennom ordboken for det som blir gitt i tekststrengen. Et ord
     * vil være et treff, hvis envher bokstavkombinasjon som man søker etter
     * finnes i ordet. Søke er ikke "case"-sensitive (dvs. det spiller ingen
     * rolle om man søker med store eller små bokstaver.
     *
	 * Krever jquery biblioteket innlastet. 
	 *
	 * @param hva man søker etter
	 * @returns en tabell med resultater som inneholder alle ord som passer
	 */
	this.search = function(query) {
		var pattern = new RegExp(query, "i"); // i - ignore case
		return $.grep(words, function(w) {
			return pattern.test(w);
		});
	};

	/**
	 * Returnerer totalt antall ord i ordboken
	 *
	 * @returns antall ord i denne ordboken
	 */
	this.size = function() {
		return words.length;
	}

	/**
	 * Returnerer en tabell med alle ord i orboken
	 *
	 * @returns en tabell med alle ord i denne ordboken
	 */
	this.all = function() {
		return words;
	}

}
