# Prima di inziare
Muoversi nella cartella typescript ed eseguire *npm i* per installare le dipendenze

* * *

# Come creare le challenge
Nella cartella typehero-challenges create una sottocartella con il vostro nome e create il file utilizzando il formato *challenge-X.ts*

#### Esempio struttura
![alt text](image-2.png)

* * *

# Una volta scritta la challenge
Nella cartella typescript eseguire il comando *npm run compile* o *npx tsc* per compilare i files .ts.

__Se il comando va a buon fine, si generano i file .js corrispondenti.__

#### Esempio comando *npm run compile*
![alt text](image-5.png)

* * *

## Avanzato e NON OBLIGATORIO (testing con jest)
Potete scrivere i test (nomenclatura *challenge-X.test.ts*) ed eseguirli con *npm test*

#### Esempio scritto test challenge-1
![alt text](image.png)

#### Esempio test PASS
![alt text](image-1.png)