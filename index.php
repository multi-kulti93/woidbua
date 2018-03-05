<?php require("inc/header.php"); ?>

<!-- Navigation Header -->
<?php include("inc/navigation.php") ?>

<!-- Home -->
<?php include("inc/hero.php"); ?>

<!-- About -->
<div class="section section__about">
    <div class="container">
        <h1 id="about">About</h1>
        <?php include("inc/cv.php"); ?>

        <?php include("inc/programmierkenntnisse.php"); ?>
    </div>
</div>

<!-- Projekte -->
<div class="section section__projects">
    <div class="container">
        <?php include("./inc/projects.php"); ?>
    </div>
</div>

<!-- Kontakt -->
<div class="section section__contact">
    <div class="container">
        <h1 id="kontakt">Kontakt</h1>
        <div class="row">
            <div class="col-sm-4 text-center">
                <i class="fa fa-home" aria-hidden="true"></i>
                Schmidstraße 14, 94234 Viechtach
            </div>
            <div class="col-sm-4 text-center">
                <i class="fa fa-phone" aria-hidden="true"></i>
                +49 160 / 55-07-869
            </div>
            <div class="col-sm-4 text-center">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                andre.multerer@gmail.com
            </div>
        </div>
        <hr class="hr--light">
        <form>
            <div class="form-group">
                <label for="contactName">Name</label>
                <input type="text" class="form-control" id="contactName">
            </div>
            <div class="form-group">
                <label for="contactEmail">Email</label>
                <input type="email" class="form-control" id="contactEmail">
            </div>
            <div class="form-group ">
                <label for="contactText">Nachricht</label>
                <textarea id="contactText" class="form-control" rows="10" placeholder="Ihr Anliegen"></textarea>
            </div>
            <button type="submit" class="btn btn-success w-100">Absenden</button>
        </form>
    </div>
</div>

<?php require("inc/footer.php"); ?>