//@ts-ignore
const d = document,
    //@ts-ignore
    $main = d.querySelector('main'),
    $dropZone = d.querySelector('.drop__zone');
    
    //@ts-ignore
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

            let res = await fetch('./uploader-drag-and-drop.php',options),
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
    
    
    //@ts-ignore
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
            }, 3000);
        })

    }
    
    $dropZone.addEventListener('dragover', e => {
        e.preventDefault();
        e.stopPropagation();
        //@ts-ignore
        e.target.classList.add('is-active');
    });

    $dropZone.addEventListener('dragleave', e => {
        e.preventDefault();
        e.stopPropagation();
        //@ts-ignore
        e.target.classList.remove('is-active');
    });
    
    $dropZone.addEventListener('drop', e => {
        e.preventDefault();
        e.stopPropagation();
        //@ts-ignore
        const files = Array.from(e.dataTransfer.files);
        files.forEach(el => progressUploader(el));
        //@ts-ignore
        e.target.classList.remove('is-active');
    });