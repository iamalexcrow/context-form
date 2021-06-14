import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { useGlobalContext } from '../../state/context';
import Files from './Files';

const DragAndDrop = () => {
    const {formData, size, removeFiles, onDrop} = useGlobalContext();
    const files = formData.Файлы;

    const {
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: '.obj',
        onDrop,
        maxSize: size
    });

    // clean up
    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);
    
    return (
        <Wrapper>

            <div className="flex">
                <p>Загружено файлов: {files.length}</p>
                <p className="reset" onClick={removeFiles}>Удалить</p>
            </div>

            <div className="flex">

                {files.map((file,index)=> {
                    const {name} = file
                    return (
                        <Files key={name} name={name} index={index}/>
                    )
                })}

                <Container {...getRootProps()}>
                    <input {...getInputProps()} />
                        <div className="symbol">
                            <i className="fas fa-upload"></i>
                        </div>
                        <div className="text">
                            <p><b>Загрузить файлы</b></p>
                            <p>Макс. размер файла: {size/1024/1024} Мб</p>
                        </div>
                </Container>
                
            </div>
        </Wrapper>
    );
}

export default DragAndDrop;

const Wrapper = styled.div`
    grid-column: 1/3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
.flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 10px;
}
.reset{
    color: rgba(26, 110, 203, 1.00);
    text-decoration: underline;
    cursor: pointer;
}
.symbol {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 22%;
}
.text {
    padding: 25px 10px 25px 0;
}
.fas {
    font-size: 1.2rem;
}
p {
    margin: 5px;
    font-size: 0.9rem
}
`
const Container = styled.div`
    height: 100%;
    background-color: rgba(241, 247, 255, 1.00);
    border: 2px dotted rgba(141, 186, 255, 1.00);
    transition: border .24s ease-in-out;
    border-color: rgba(141, 186, 255, 1.00);
    border-radius: 4px;
    flex-basis: 24%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;