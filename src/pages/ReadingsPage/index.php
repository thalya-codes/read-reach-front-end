<!DOCTYPE html>
<html lang="pt-br">

<?php 
    $additional_head_content = "
        <!-- Conteúdo adicional no head -->
        <title>ReadReach - My readings</title>
        <link rel='stylesheet' href='./styles.css'>
    ";
?>
<?php include '../../includes/head.php'; ?>

<body>
    <!-- Tela de Usuário sem leitura cadastrada -->
    <div id="noReadingScreen" class="no-reading-screen">
        <p>Você não tem leituras cadastradas.</p>
        <button id="openModalBtnFromNoReading">Cadastrar Leitura</button>
    </div>


    <div id="myModal" class="modal">
      
        <div class="modal__content">
            <button class="btn modal__close-btn" aria-label="Fechar modal">&times;</button>
            <h2 class="modal__title">Cadastrar Nova Leitura</h2>
            
            <form id="cadastroLeituraForm" class="resgister-reading-form flex flex-column gap-2">
                <div class="d-flex flex-column row-gap-2 mb-3">
                    <label for="titulo" class="main-orange-text">Título</label>                    
                    <input type="text" class="form-control" name="titulo" id="titulo"  required>
                </div>

                <div class="d-flex flex-column row-gap-2 mb-3">
                    <label for="autor" class="resgister-reading-form__label main-orange-text">Autor(a)</label>
                    <input type="text" class="form-control" name="autor" id="autor"  required>
                </div>
                
                <div class="d-flex flex-column row-gap-2 mb-3">
                    <label for="dataInicioLeitura" class="resgister-reading-form__label main-orange-text">Início</label>
                    <input type="text" class="form-control" name="dataInicioLeitura" id="dataInicioLeitura"  required>
                </div>

                <div class="d-flex flex-column row-gap-2 mb-3">
                    <label for="dataFimLeitura" class="resgister-reading-form__label main-orange-text">Fim</label>
                    <input type="text" class="form-control" name="dataFimLeitura" id="dataFimLeitura"  required>
                </div>
                
                <button type="submit" class="btn resgister-reading-form__submit-btn">Salvar</button>
            </form>
        </div>
    </div>

    <script src="scripts.js"></script>
</body>
</html>
