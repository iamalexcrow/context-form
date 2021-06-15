import React, { useState, useContext, useCallback, useEffect} from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const initialFormData = Object.freeze({
        "Файлы": [],
        "Процесс": "Слепить руками",
        "Материал": "PLA",
        "Цвет": "Белый",
        "Обработка": "Стандартная",
        "Толщина слоя": "50 мкм",
        "Точность": "Сплошное",
        "Заполнение": 100,
        "Количество резьбовых отверстий": 0,
        //Стоимость
        "Стоимость": 'Эконом',
    });

    // СТЕЙТ ДЛЯ ФОРМЫ
    const [formData, updateFormData] = useState(initialFormData);
    // СТЕЙТ ДЛЯ МОДАЛЬНОГО ОКНА
    const [modal, setModal] = useState('')
    // ВРЕМЕННЫЙ СТЕЙТ ДЛЯ ПОДГРУЖЕННЫХ ФАЙЛОВ;
    const [newFiles, setNewFiles] = useState('');

    //////////////////////////   DRAG AND DROP    //////////////////////
    const onDrop = useCallback(acceptedFiles => {
        setNewFiles([ ...acceptedFiles.map(file => Object.assign(file, {preview: URL.createObjectURL(file), amount: 1}))])
    }, []);

    const doNotAddTheSameFiles = (array) => {
        let uniqueArray;
        let uniqueName;
        if (formData.Файлы.length > 0) {
            uniqueArray = formData.Файлы;
            uniqueName = uniqueArray.map((arr)=> {
                return arr.name
            });
        } else {
            uniqueArray = [];
            uniqueName = [];
        }
        array.forEach((a) => {
            if(uniqueName.indexOf(a.name) === -1) {
                uniqueName.push(a.name);
                uniqueArray.push(a);
        }})
        updateFormData({
            ...formData,
            Файлы: uniqueArray
        })
    }

    useEffect(()=> {
            if (newFiles === '') {
                return
            } else {
                doNotAddTheSameFiles(newFiles)
            }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newFiles]);

    const size = 104857600;

    const removeFiles = () => {
        updateFormData({
            ...formData,
            Файлы: []
        })
    }

    const check = (file,ind,index,operator) => {
        if(index === ind) {
            if(operator === "+") {
                return Object.assign(file, {amount: ++formData.Файлы[index].amount})
            } 
            if (operator === "-") {
                return Object.assign(file, {amount: --formData.Файлы[index].amount})
            }
        } else {
            return Object.assign(file, {amount: formData.Файлы[ind].amount})
        }
    }
  
    const toggleAmount = (e) => {
        const index = Number(e.target.name);
        const operator = e.target.value
        if (operator === "+") {
            updateFormData({
                ...formData,
                Файлы: formData.Файлы.map((file,ind)=> check(file,ind,index,operator))
            })
        } else {
            if(formData.Файлы[index].amount === 1) {
                updateFormData({
                    ...formData,
                    Файлы: formData.Файлы.filter((file,ind) => ind !== index)
                })
            } else {
                updateFormData({
                    ...formData,
                    Файлы: formData.Файлы.map((file,ind)=> check(file,ind,index,operator))
                })
            }
        }
    }    

    const shortenName = (name) => {
        if (name.length > 18) {
            name = `${name.slice(0,18)}...`
        } 
        return name;
    }
    //////////////////    ПАРАМЕТРЫ   /////////////////////////////
    const handleSettingsChange= (e) => {
        e.preventDefault();
        if(e.target.type === 'select-one') {
            updateFormData({
                ...formData,
                [e.target.name]: e.target.value
            }) 
        } else {
            if (e.target.value === '-') {
                if(formData[e.target.name] < 1) {
                    return
                } else updateFormData({
                    ...formData,
                    [e.target.name]: formData[e.target.name] - 1 
                })
            } else {
                if(formData[e.target.name] > 99) {
                    return
                } else updateFormData({
                    ...formData,
                    [e.target.name]: formData[e.target.name] + 1 
                })
            }
        }  
    }

    const reset = () => {
        updateFormData({
            ...formData,
            "Процесс": "Слепить руками",
            "Материал": "PLA",
            "Цвет": "Белый",
            "Обработка": "Стандартная",
            "Толщина слоя": "50 мкм",
            "Точность": "Сплошное",
            "Заполнение": 100,
            "Количество резьбовых отверстий": 0
        })
    }

    //////////////////////     СТОИМОСТЬ     ///////////////////////////
    const handleDeliveryChange = (e) => {
        e.stopPropagation();
        e.preventDefault();
        updateFormData({
            ...formData,
            "Стоимость": e.target.value
        });
    }

    const getDeliveryDate = (t) => {
        const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
        const d = new Date(new Date().getTime() + 86400000 * t)
        const delivery = `${d.getDate()} ${months[d.getMonth()]}`;
        return delivery
    }
    
    return <AppContext.Provider value={{
        formData,
        updateFormData, 
        reset,
        handleSettingsChange,
        handleDeliveryChange,
        getDeliveryDate,
        onDrop,
        size,
        removeFiles,
        toggleAmount,
        modal,
        setModal,
        newFiles,
        setNewFiles,
        shortenName
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};