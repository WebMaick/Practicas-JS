//@ts-ignore
const d = document,
    //@ts-ignore
    $main = d.querySelector('main'),
    $files = d.getElementById('files');

    const uploader = async (file) => {
        try {
            const formData = new FormData()
            formData.append("file",file)
            

            let options = {
                method: "POST",
                headers: {
                    "enc-type":"multipart/form-data"
                },
                body: formData
            }

            let res = await fetch('./uploader.php',options),
                data = await res.json();
            
                if(!res.ok) throw {status: res.status, statusText: res.statusText}
                
            //console.log(data)
        
        } catch (err) {
            let message = err.statusText || "Ocurrio un error";
            //@ts-ignore
            //$form.insertAdjacentElement('afterend', `<p><b>${err,status}:${message}</b></p>`)
            alert(message)              
        }
    }


    const progressUploader = (file) => {
        const $progress = d.createElement('progress'),
             $span = d.createElement('span');

        $progress.value = 0;
        $progress.max = 100;

        $main.insertAdjacentElement('beforeend', $progress);
        $main.insertAdjacentElement('beforeend', $span);

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.addEventListener('progress', e => {
            //@ts-ignore
            let progress = parseInt((e.loaded*100)/e.total)
            $progress.value = progress;

            $span.innerHTML = `<b>${file.name} - ${progress}%</b>`
        })

        fileReader.addEventListener('loadend', e => {
            uploader(file);
            setTimeout(() => {
                $main.removeChild($progress);
                $main.removeChild($span);
                //@ts-ignore
                $files.value = "";
            }, 3000);
        })

    }
    
    d.addEventListener('change', e => {
        if(e.target === $files){
            //@ts-ignore
            const files = Array.from(e.target.files);
    
            files.forEach(el => progressUploader(el))
        }
    })