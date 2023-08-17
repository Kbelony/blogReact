const explain = () => {
  return (
    <div className="text-center align-items-center">
      <h1>Explication projet</h1>
      <p>
        J'ai pris la décision de lancer ce projet dans le but d'apprendre à
        créer un site web en utilisant la technologie React, et d'acquérir les
        compétences nécessaires pour le déployer de manière autonome. L'idée de
        développer un blog m'est venue à l'esprit après avoir visionné une vidéo
        qui a suscité mon intérêt :
      </p>
      <iframe
        className="mb-3 mt-3"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/xaUj-NCDu7c"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p>
        J'ai construit un backend en utilisant Firebase. Pour la mise en place
        de mon projet React, j'ai opté pour{" "}
        <a href="https://vitejs.dev/guide/">Vite</a>. Après avoir démarré par la
        page d'accueil et créé plusieurs publications directement dans la base
        de données, j'ai réalisé qu'il serait plus pratique pour moi de créer
        mes articles directement depuis le site. C'est ainsi que j'ai développé
        une page de création accessible uniquement en local. Vous pouvez voir
        une image ci-dessous illustrant cela :
      </p>
      <img src="src/assets/img/Create-screen.png" />
      <p>
        Puis, j'ai conçu une page dédiée à la suppression, me permettant ainsi
        d'effacer des éléments en même temps. Ces deux pages m'ont ouvert la
        voie pour exploiter pleinement le concept de CRUD (Create, Read, Update,
        Delete), qui constitue le fondement de la gestion des données. Avec le
        CRUD, je peux créer de nouveaux contenus, les afficher, les mettre à
        jour et les supprimer, offrant ainsi une expérience complète et
        interactive aux utilisateurs. L'image ci-dessous illustre cette approche
        dynamique :
      </p>
      <img src="src/assets/img/delete-screen.png" />
    </div>
  );
};

export default explain;
