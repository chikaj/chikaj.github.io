<script>
    import splash from "images/splash-opt.svg";
</script>

<svelte:head>
    <title>Nate Currit</title>
</svelte:head>

<div class="container">
    <section id="description">
        <h2>Nate Currit</h2>
        <p>
            I am a University professor and geospatial data scientist.
            My research and teaching interests are in GIScience, with 
            special emphasis on Earth Observation analysis, spatial
            databases and human-environment interaction. I choose to
            use open source tools and data whenever the opportunity
            arises.
        </p>
    </section>
    <section id="graphic">
        <!-- <h2>Other stuff, like an image</h2> -->
        <img src="https://www.shetlandtimes.co.uk/wp-content/uploads/2017/11/Transiting_Exoplanet_Survey_Satellite_artist_concept_transparent_background.png" alt="A satellite">
    </section>
</div>
<div class="bigdiv"></div>

<style>
    .container {
        display: flex;
        flex-flow: row wrap-reverse;
        justify-content: space-evenly;
        align-items: flex-end;
    }

    .container * {
        padding: 0 1em 1em 0;
    }

    section {
        /* border: 1px solid black; */
        flex: 1 0 45%;
    }
    img {
        width: 300px;
    }

    .bigdiv {
        height: 1000px;
    }
    @media (min-width: 480px) {

    }
</style>
