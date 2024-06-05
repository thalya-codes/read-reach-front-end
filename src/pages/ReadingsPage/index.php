<!DOCTYPE html>
<html lang="pt-br">

<?php 
    $additional_head_content = "
        <!-- Conteúdo adicional no head -->
        <title>ReadReach - My readings</title>
        <link rel='stylesheet' href='./styles.css'>
        <script src='./js/index.js' type='module'></script>
    ";
?>
<?php include '../../includes/head.php'; ?>

<body>
    <?php include '../../includes/header.php'; ?>

    <main class="gap-3 mt-5">
        
        <h2 id="no-readings" class="no-reading-title mt-5 d-none">
            Ops! Parece que você ainda não possui <br/> <span class="pink-under-decoration">nenhuma leitura cadastrada.</span>
        </h2>
        
        <button class="btn add-new-reading--btn"  data-bs-toggle="modal" data-bs-target="#new-reading-modal">Adicionar nova leitura</button>

        <ul id="reading-list" class="reading-list mb-5 d-none"></ul>

        <!-- Modal -->
        <div class="modal fade" id="new-reading-modal" tabindex="-1" aria-labelledby="new-reading-label" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content p-50">
            <div class="modal-header d-flex justify-content-between border-bottom-0">
                <h2 class="principal-title align-self-center flex-grow-1">Cadastrar Nova Leitura</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">                        
                <form id="register-reading-form" method="post" class="register-reading-form d-flex flex-column gap-2">
                    <div class="d-flex flex-column row-gap-2 mb-3">
                        <label for="titulo" class="register-reading-form__label main-orange-text">Título</label>                    
                        <input type="text" class="form-control" name="titulo" id="titulo"  required>
                    </div>
    
                    <div class="d-flex flex-column row-gap-2 mb-3">
                        <label for="autor" class="register-reading-form__label main-orange-text">Autor(a)</label>
                        <input type="text" class="form-control" name="autor" id="autor"  required>
                    </div>
                    
                    <div class="d-flex flex-column row-gap-2 mb-3">
                        <label for="start-reading-date" class="register-reading-form__label main-orange-text">Início</label>
                        <input type="date" class="form-control" name="start-reading-date" id="start-reading-date"  required>
                    </div>
    
                    <div class="d-flex flex-column row-gap-2 mb-3">
                        <label for="end-reading-date" class="register-reading-form__label main-orange-text">Fim</label>
                        <input type="date" class="form-control" name="end-reading-date" id="end-reading-date"  required>
                    </div>

                    <div class="d-flex flex-column row-gap-2 mb-3">
                        <label for="avaliacao" class="register-reading-form__label main-orange-text">Avaliação</label>
                        <input class="form-control" type="number" maxlength="1" min="1" max="5" value="1"  name="avaliacao" id="end-reading-date"  required>
                    </div>
                    
                    <button type="submit" class="btn submit-button" data-bs-dismiss="modal">Salvar</button>
                </form>
            </div>           
            </div>
        </div>
    </main>
 
    <?php include '../../includes/footer.php' ; ?>
</body>
</html>
