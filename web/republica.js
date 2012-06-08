var guerraDiPunica = [
		{
			"start" : date("-509"),
			"end" : date("-27"),
			"title" : "Repubblica Romna",
			"description" : "Lucio Giunio Boruto e` il fondatore della Republlica Romana.La cacciata lucio tarquinio il superbo da Roma."
		}, {
			"start" : date("-264"),
			"end" : date("-241"),
			"title" : "Primo guerra di punica",
			"description" : "Repubbulica Romana vince"
		}, {
			"start" : date("-218"),
			"end" : date("-202"),
			"title" : "Seconda guerra di punica",
			"description" : "Repubbulica Romana vince"
		}, {
			"start" : date("-149"),
			"end" : date("-146"),
			"title" : "Terza guerra di punica",
			"description" : "Cartagine non esiste piu`"
		} ];

var guerrDiMacedonica = [
		{
			"start" : date("-215"),
			"end" : date("-205"),
			"title" : "Prima Guerra Macedonia",
			"description" : "Nessuno vinto,Macedonia e Roma hanno fatto un contrato Pace di Fenice."
		},
		{
			"start" : date("-200"),
			"end" : date("-196"),
			"title" : "Seconda guerra di Macedonia",
			"description" : "Repubbulica Romana vince"
		},
		{
			"start" : date("-171"),
			"end" : date("-168"),
			"title" : "Terza guerra di Macedonia"
		},
		{
			"start" : date("-150"),
			"end" : date("-148"),
			"title" : "Quarta guerra di Macedonia",
			"description" : "L`utimo macedonia diventava una provincia della repubblica romana."
		} ];

var guerra = [ {
	"start" : date("-340"),
	"end" : date("-338"),
	"title" : "Guerra Latina",
	"description" : "Un conflitto tra RR e i suoi vicini"
} ];

var schiavi = [ {
	"start" : date("-135"),
	"end" : date("-132"),
	"title" : "Guerra Schiavi Euno"
}, {
	"start" : date("-104"),
	"end" : date("-103"),
	"title" : "Guerra Schiavi Atenione Trifone"
},{
	"start" : date("-73"),
	"end" : date("-71"),
	"title" : "Guerra Schiavi Spartaco"
} ];

var leggi = [ {
	"start" : date("-451"),
	"title" : "Leggi delle 12 tavole",
	"description" : "Cilive,figli,genitori,eredita,proprieta,illeciti,matrimonio,crimini"
} ];

var republica = put([ leggi, guerraDiPunica, guerrDiMacedonica, guerra, schiavi ]);
