"use client";
import React from "react";
import Html from "react-pdf-html";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
  Link,
  Font,
} from "@react-pdf/renderer";

Font.register({ family: "SpaceGrotesk", src: "/fonts/SpaceGrotesk-Bold.ttf" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-4">
      <p className="border p-4">REACT PDF With NEXT.JS</p>
      <div className="w-full h-[650px] flex items-center justify-center">
        <PDFViewer className="w-full h-full">
          <MyDocument />
        </PDFViewer>
      </div>
    </main>
  );
}

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
      <Html>{html}</Html>
      <View style={styles.section}>
        <Image src="/logo.JPG" />
      </View>
    </Page>
    <Page size="A4" style={styles.page}>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
      <View style={styles.section}>
        <Link src="#page1">Page 1</Link>
        <Link src="#page2">Page 2</Link>
      </View>
    </Page>
    <Page id="page1" size="A4" style={styles.page}>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
      <View style={styles.section}>
        <Text>
          Cristiano Ronaldo dos Santos Aveiro, couramment appelé Cristiano
          Ronaldo ou Ronaldo et surnommé CR7, né le 5 février 1985 à Funchal
          (Portugal), est un footballeur international portugais qui joue au
          poste d'attaquant au Al-Nassr FC. Considéré comme l'un des meilleurs
          footballeurs de l'histoire, il est avec Lionel Messi (avec qui une
          rivalité sportive est entretenue) l’un des deux seuls à avoir remporté
          le Ballon d'or au moins cinq fois. Auteur de plus de 870 buts en plus
          de 1 200 matchs en carrière, Cristiano Ronaldo est le meilleur buteur
          de l'histoire du football selon la Fédération internationale de
          football association (FIFA). Il est également le meilleur buteur de la
          Ligue des champions de l'UEFA, des coupes d'Europe, du Real Madrid, du
          derby madrilène, de la Coupe du monde des clubs de la FIFA et de la
          sélection portugaise, dont il est le capitaine officiel depuis 2008.
          Premier joueur à avoir remporté le Soulier d'or européen à quatre
          reprises, il est également le meilleur buteur de l'histoire du
          championnat d'Europe des nations (avec 14 buts) devant Michel Platini
          et détient le record de buts en équipe nationale, avec 128
          réalisations. Élevé sur l'île de Madère, il intègre le centre de
          formation du Sporting CP à l'âge de onze ans et signe son premier
          contrat professionnel en 2002. Recruté par Manchester United durant
          l'été suivant, il révèle son talent lors de l'Euro 2004 à seulement 19
          ans avec le Portugal. Il réalise une excellente saison 2007-2008 avec
          Manchester United en remportant la Premier League et la Ligue des
          champions. En 2009, il est alors l'objet du transfert le plus élevé de
          l'histoire du football (94 millions d'euros), quand il quitte les Red
          Devils pour le Real Madrid. Il remporte avec le club madrilène de
          nombreux trophées dont le championnat d'Espagne et quatre fois la
          Ligue des champions entre 2014 et 2018. À l'issue de ce dernier
          succès, il quitte la Casa Blanca après neuf saisons au club pour la
          Juventus FC. Son aventure italienne est ponctuée par deux titres de
          champions d'Italie, mais trois éliminations successives en Ligue des
          champions. En 2021, il revient à Manchester United où il termine
          meilleur buteur de l'équipe lors de sa première saison avant d'être
          licencié en décembre 2022 après avoir critiqué le club publiquement
          lors d'un entretien télévisé. Il signe ensuite dans le club saoudien
          du Al-Nassr FC en Saudi Pro League pour un contrat record. En
          sélection, il est le joueur le plus capé, le meilleur buteur et un des
          acteurs décisifs du Portugal qui remporte son tout premier titre
          international en battant la France en finale de l'Euro 2016 puis la
          Ligue des nations 2018-2019 contre les Pays-Bas. Depuis 2003, il a
          participé à cinq championnats d'Europe et cinq Coupes du monde, dont
          il est le premier joueur à avoir marqué un but dans cinq éditions
          différentes de la compétition planétaire. En juin 2023, il devient le
          premier joueur de l'histoire du football, à franchir le cap des 200
          sélections en équipe nationale. Joueur complet et polyvalent, il
          cumule les trophées et les records individuels au terme d'une carrière
          étendue sur plus de vingt ans. Son talent et sa longévité en font l'un
          des joueurs les plus respectés par les observateurs malgré sa
          personnalité clivante. Faisant partie des athlètes les plus célèbres,
          il est désigné sportif le mieux rémunéré au monde à plusieurs reprises
          par le magazine Forbes, notamment grâce à ses contrats publicitaires
          et établissements commerciaux à son nom. En 2014, le magazine Time
          l’inclut sur sa liste des cent personnes les plus influentes au monde.
          Il est également la personnalité la plus suivie sur le réseau social
          Instagram, comptant 620 millions d'abonnés. Biographie Issu d'une
          famille pauvre madéroise, Cristiano Ronaldo dos Santos Aveiro2 est le
          fils de Maria Dolores dos Santos (1954-) et José Dinis Aveiro
          (1953-2005). Il est né le 5 février 1985 à Santo António, municipalité
          de Funchal sur l'île de Madère3. C'était une naissance prématurée,
          mais le bébé se portait bien. Son prénom Cristiano a été choisi par sa
          tante, et son second prénom, Ronaldo, lui a été donné par ses parents
          en référence au président des États-Unis de l'époque, Ronald Reagan,
          que son père admirait en tant qu'acteur4. Il a un grand frère (Hugo)
          et deux grandes sœurs (Elma et Cátia Lilian, candidate de Dança com as
          Estrelas 20155). Son arrière-grand-mère, Isabel da Piedade, est
          capverdienne6. Son père fut touché par le chômage ainsi que
          l'alcoolisme. Quant à son grand frère Hugo, il a été durement
          dépendant à la drogue. Dès que Cristiano eut les moyens financiers
          d'aider sa famille, il le fit : il a notamment aidé son frère à sortir
          de la drogue, a acheté une maison située à Madère pour sa mère.
          Néanmoins, son père refusa toujours son aide ce qui avait le don
          d'énerver Cristiano, qui répondait souvent : « À quoi cela me sert-il
          d'avoir autant d'argent ? ». Son père étant un homme fier et
          orgueilleux, il ne désirait pas qu'on l'aide et encore moins qu'on le
          prenne en pitié. C'est de son père que Cristiano tient cet acharnement
          envers le travail[réf. nécessaire]. Son père, José Dinis Aveiro,
          décède le 7 septembre 2005 à Londres à la suite d'une tumeur du foie
          provoquée par l'alcool. Ce serait pour cette raison que Cristiano
          Ronaldo ne boit pas d'alcool7. En octobre 2005, Cristiano Ronaldo est
          arrêté et entendu par la police, car lui et un complice sont accusés
          de viol par deux jeunes filles. L'affaire sera classée peu après
          puisqu'une des deux filles retirera sa plainte8. Le 27 septembre 2018,
          Kathryn Mayorga dépose plainte contre le joueur pour un viol qui
          aurait eu lieu le 13 juin 2009, lors d'une soirée à Las Vegas9. La
          Juventus FC assure alors son soutien au joueur alors que ses sponsors
          Nike et EA Sports ont parlé de situation « troublante »10,11. Avec
          l'aide d'une de ses sœurs, il a ouvert une boutique de vêtements
          appelée CR7, son surnom (formé de ses initiales et du numéro de son
          maillot)12. Il en existe deux : une à Lisbonne et l'autre à Madère.
          Cristiano Ronaldo se décrit souvent comme honnête, détestant perdre et
          fidèle en amitié. Pendant sa période madrilène, il habite dans le
          quartier résidentiel de La Finca à Madrid, un quartier riche réservé
          aux sportifs professionnels et où habitent plusieurs de ses
          coéquipiers. Il est devenu, le 17 juin 2010, père d'un petit Cristiano
          Junior, pour lequel il aurait payé la mère 12 millions d'euros pour en
          conserver la garde exclusive, taisant le nom de cette dernière. C'est
          à son fils qu'il dédia son but contre les Pays-Bas lors de l'Euro 2012
          le 17 juin 2012. Dans sa situation amoureuse, Cristiano Ronaldo a
          fréquenté les mannequins Merche Romero (en) en 2006 et Nereida
          Gallardo en 2008. En 2009, il a également eu une brève relation avec
          la célèbre Paris Hilton13. Il est en couple avec la top model russe
          Irina Shayk de mai 2010 à janvier 2015. Leur rupture est confirmée
          après cinq ans de vie commune14.
        </Text>
      </View>
    </Page>
    <Page id="page2" size="A4" style={styles.page}>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
      <View style={styles.section}>
        <Text>
          Cristiano Ronaldo dos Santos Aveiro, couramment appelé Cristiano
          Ronaldo ou Ronaldo et surnommé CR7, né le 5 février 1985 à Funchal
          (Portugal), est un footballeur international portugais qui joue au
          poste d'attaquant au Al-Nassr FC.
        </Text>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    fontFamily: "SpaceGrotesk",
  },
  section: {
    flexGrow: 1,
    fontSize: 12,
    lineHeight: 1.5,
    padding: 30,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    paddingVertical: 40,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "red",
  },
});

const html = `<html>
  <body>
    <style>
      .my-heading4 {
        background: darkgreen;
        color: white;
      }
      pre {
        background-color: #eee;
        padding: 10px;
      }
    </style>
    <h1>Heading 1</h1>
    <h2 style="background-color: pink">Heading 2</h2>
    <h3>Heading 3</h3>
    <h4 class="my-heading4">Heading 4</h4>
    <p>
      Paragraph with <strong>bold</strong>, <i>italic</i>, <u>underline</u>,
      <s>strikethrough</s>,
      <strong><u><s><i>and all of the above</i></s></u></strong>
    </p>
    <p>
      Paragraph with image <img src="" /> and
      <a href="http://google.com">link</a>
    </p>
    <hr />
    <ul>
      <li>Unordered item</li>
      <li>Unordered item</li>
    </ul>
    <ol>
      <li>Ordered item</li>
      <li>Ordered item</li>
    </ol>
    <br /><br /><br /><br /><br />
    Text outside of any tags
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Foo</td>
          <td>Bar</td>
          <td>Foobar</td>
        </tr>
        <tr>
          <td colspan="2">Foo</td>
          <td>Bar</td>
        </tr>
        <tr>
          <td>Some longer thing</td>
          <td>Even more content than before!</td>
          <td>Even more content than before!</td>
        </tr>
      </tbody>
    </table>
    <div style="width: 200px; height: 200px; background: pink"></div>
    <pre>
function myCode() {
  const foo = 'bar';
}
</pre>
  </body>
</html>
`;
