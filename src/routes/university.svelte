<svelte:head>
	<title>University</title>
</svelte:head>
<div class="title">
    <h2>Research foci</h2>
</div>
<div class="content">
    <p>
        I focus on GISience projects that integrate human-environment interaction.
        I do a few other things, too.
    </p>
    <hr class="short">

    <h3 class="section-header">Remote Sensing</h3>
    <p>
        I do satellite image stuff!
    </p>
    <hr class="short">

    <h3 class="section-header">GIScience</h3>
    <p>
        I do database and spatial analysis stuff!
    </p>
    <hr class="short">

    <h3 class="section-header">Open Source</h3>
    <p>
        I use as many open source tools as I can! That means QGIS, of course, 
        but also Python-based tools like rasterio, scipy and TensorFlow. 
        And for development, <a href="https://www.docker.com">Docker</a> with 
        <a href="https://www.djangoproject.com">Django</a> for the backend and 
        <a href="https://svelte.dev" target="_blank">Svelte</a> for the frontend.
    </p>
    <hr class="short">

    <h3 class="section-header">The Currit Lab</h3>
    <p>
        I coordinate much of my work with students in <a href="https://thecurritlab.github.io">The Currit Lab</a>.
    </p>
</div>

<div class="title">
    <h2>Teaching philosophy</h2>
</div>
<div class="content">
    <p>
        I enjoy teaching and learning...and I do both in my classes. I teach students and they often teach me.
        The collaborative classrooms I strive to create enhance the learning experiences for everyone involved.
    </p>

    <hr class="short">

    <h3>Regularly taught University courses</h3>

    <ul>
        <li>
            <div class="title"><strong>Geographic Applications of Remote Sensing</strong> <span class="level">(Graduate)</span></div>
            <p>The is an accelerated course.</p>
        </li>
        <li>
            <div class="title"><strong>Exploring Spatial Databases</strong> <span class="level">(Graduate)</span></div>
            <p>
                This course begins with ontologies and geospatial semantics, advances to 
                Entity-Relationship Diagrams, and concludes with basic to advanced SQL. 
                PostgreSQL with the PostGIS geospatial extention is used in the course.
            </p>
        </li>
        <li>
            <div class="title"><strong>Remote Sensing and Earth Observation</strong> <span class="level">(Undergraduate)</span></div>
            <p>
                This course is an introduction to the principles and practices of orbital and sub-orbital 
                Earth Observation.
            </p>
        </li>
        <li>
            <div class="title"><strong>Advanced Geographic Information Systems</strong> <span class="level">(Undergraduate)</span></div>
            <p>This course covers advanced raster and vector analyses in a GIS environment.</p>
        </li>    
    </ul>
</div>

<style>
    span.level {
        font-size: 0.8em;
    }

    .title {
        font-size: 1.2em;
    }

    .section-header {
        text-decoration: underline;
    }

    .short {
        width: 50%;
    }

    .content {
        padding: 0 1em 1.5em 1.5em;
    }
</style>
