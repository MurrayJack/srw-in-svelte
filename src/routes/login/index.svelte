<script>
    import StarRez from "$lib/icons/StarRez.svelte";
    import H1 from "$lib/styles/H1.svelte"    

    let src = "login-background.jpeg"
</script>

<img role="presentation" {src} alt="background" />

<div class="container">
    <form>
        <StarRez />
        <H1>Sign In to StarRez</H1>
        
        <div>
            <label>
                <span>UserName</span>
                <input name="username" />
            </label>
        </div>
        <div>
            <label>
                <span>Password</span>
                <input name="passowrd" type="password"/>
            </label>
        </div>
        <div>
            <label>
                <input type="checkbox" />
                <span>Stay Signed In for 7 Days</span>
            </label>
        </div>
        <div>
            <button>Sign In</button>
        </div>
    </form>
</div>

<style>
    img {
        height: 100vh;
        width: 100vw;
        object-fit: cover;
        position: absolute;
    }

    .container {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: var(--color-grey-g20);
        padding: 3em 6em;
        box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
    }

    form {
        display: grid;
        justify-content: center;
        grid-template-rows: auto auto  1fr;
        gap: 16px
    }

    @media  (min-height: 600px) and (min-width: 500px){
        .container {
            left: 50%;
            top: 50%;
            transform: translateY(-50%) translateX(-50%);
            width: 600px;
            height: 500px;
        }
    }

</style>