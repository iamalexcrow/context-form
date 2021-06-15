import React, {useEffect} from 'react';
import { useDropzone } from 'react-dropzone';
//context
import { useGlobalContext } from '../../state/context';
//components
import Files from './Files';
//styled
import styled from 'styled-components';
import {device} from '../styledComponents';

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
            <div className="header">
                <p>Загружено файлов: {files.length}</p>
                <p className="reset" onClick={removeFiles}>Удалить</p>
            </div>
            <div className="flexBox">
                {files.map((file,index)=> {
                    const {name} = file
                    return (
                        <Files key={name} name={name} index={index}/>
                    )
                })}
                <div className="uploadContainer" {...getRootProps()}>
                    <input {...getInputProps()} />
                        <div className="symbol">
                            <i className="fas fa-upload"></i>
                        </div>
                        <div className="text">
                            <p><b>Загрузить файлы</b></p>
                            <p>Макс. размер файла: {size/1024/1024} Мб</p>
                        </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default DragAndDrop;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 0.9rem;

.header {
    height: 100%;
    display: flex;
    align-items: center;
    margin-top: 8px;
}
.flexBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
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
.fas {
    font-size: 1.2rem;
}
p {
    margin: 5px;
}
.uploadContainer {
    height: 100%;
    margin-top: 8px;
    background-color: rgba(241, 247, 255, 1.00);
    border: 2px dotted rgba(141, 186, 255, 1.00);
    border-radius: 4px;
    flex-basis: 24.5%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
}

.text {
    padding: 25px 10px 25px 0;
}

@media ${device.laptopL} {
    .text {
        padding: 25px 10px 25px 0;
    }
}

@media ${device.laptopML} {
    .text {
        padding: 16px 10px 16px 0;
    }
}

@media ${device.laptopM} {
    font-size: 0.8rem
}

@media ${device.laptopS} {
    .text {
        padding: 23.5px 10px 23.5px 0;
    }
    .uploadContainer {
        flex-basis: 32%
    }
}

@media ${device.laptopXS} {
    .text {
        padding: 16px 10px 16px 0;
    }
}

@media ${device.tabletL} {
    .uploadContainer {
        flex-basis: 49%
    }
    .text {
        padding: 23.5px 10px 23.5px 0;
    }
}

@media ${device.tabletM} {
    .text {
        padding: 16px 10px 16px 0;
    }
}
@media ${device.tabletS} {
    .uploadContainer {
        flex-basis: 100%
    }
    .text {
        padding: 23.5px 10px 23.5px 0;
    }
}
`