<!DOCTYPE html>
<html lang="pt-br">
    <?php 
        $additional_head_content = "
            <!-- Conteúdo adicional no head -->
            <title>ReadReach - Criar conta</title>
        ";
    ?>
    <?php include '../../includes/head.php'; ?>
    
    <body class="bg-extra-light-blue">
       <?php include '../../includes/header.php'; ?>

       <main>
           <form action="" class="card-read-reach w-50vw d-flex flex-column gap-3">
               <h2 class="principal-title">Criar conta</h2>
               
               <div class="d-flex flex-column row-gap-2 mb-4">
                   <label for="nome" class="main-orange-text text-xs">Nome</label>
                   <input type="text" class="form-control" name="nome" id="nome"  required>
               </div>
   
               <div class="d-flex flex-column row-gap-2 mb-4">
                   <label for="email" class="main-orange-text text-xs">Email</label>
                   <input type="text" class="form-control" name="email" id="email"  required>
               </div>
   
               <div class="d-flex flex-column row-gap-2 mb-3">
                   <label for="senha" class="main-orange-text text-xs">Senha</label>
                   <input type="text" class="form-control" name="senha" id="senha"  required>
               </div>
   
               <button type="submit" class="btn submit-button">Entrar</button>
               <footer class="mt-4 text-center">
                   <p>Já possui uma conta? <a href="../login/index.php"> Clique aqui para fazer login</a></p>
               </footer>
           </form>
       </main>
       
        <?php include '../../includes/footer.php' ; ?>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </body>
</html>