import axios from "axios"

const client = axios.create({
    baseURL: "http://localhost:3000/",
});

export const getEntries = async () => {
    return client.get('getEntries');
};

export const getCategories = async () => {
    return client.get('getCategories');
};

export const newEntry = (data) => {
    debugger
    let tagsArr = data.tags.split(' ')
    tagsArr = tagsArr.filter((tag) => (tag !== "" && tag !== null && tag !== undefined))
    return client.post('addEntry', {
        title: data.title,
        tags: tagsArr,
        data: data.data,
    })
}

export const searchByTags = async (tags) => {
    return client.post('searchTags', {
        tags
    })
}

export const deleteEntry = (data) => {
    return client.post(`deleteEntry`, {
        id: data.id,
    });
}

export const searchTitle = (data) => {
    return client.post('searchTitle', {
        titlePart: data
    })
}

export const searchOne = (data) => {
    return client.post('getOne', {
        id: data
    })
}