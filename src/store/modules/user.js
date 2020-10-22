const state={
    isSuccess:false,
    user: {
        firstName:'',
        secondName:'',
        surname:'',
        dateOfBirth:null,
        phone:'',
        doctor:'',
        typeOfClient:[],
        sex:'',
        isMessage:false,
        index:'',
        country:'Россия',
        region:'',
        city:'',
        street:'',
        house:'',
        series:'',
        number:'',
        typeOfDoc:'Паспорт',
        issuedBy:'',
        dateOfIssue:''
    }
    
}
const actions={
    updateSeries: (context,payload) => {
        context.commit('updateSeries',payload)
    },
    updateNumber: (context,payload) => {
        context.commit('updateNumber',payload)
    },
    updateTypeOfDoc: (context,payload) => {
        context.commit('updateTypeOfDoc',payload)
    },
    updateIssuedBy: (context,payload) => {
        context.commit('updateIssuedBy',payload)
    },
    updateDateOfIssue: (context,payload) => {
        context.commit('updateDateOfIssue',payload)
    },
    updateIndex: (context,payload) => {
        context.commit('updateIndex',payload)
    },
    updateCountry: (context,payload) => {
        context.commit('updateCountry',payload)
    },
    updateRegion: (context,payload) => {
        context.commit('updateRegion',payload)
    },
    updateCity: (context,payload) => {
        context.commit('updateCity',payload)
    },
    updateStreet: (context,payload) => {
        context.commit('updateStreet',payload)
    },
    updateHouse: (context,payload) => {
        context.commit('updateHouse',payload)
    },
    updateSecondName: (context,payload) => {
        context.commit('updateSecondName',payload)
    },
    updateFirstName: (context,payload) => {
        context.commit('updateFirstName',payload)
    },
    updateSurname: (context,payload) => {
        context.commit('updateSurname',payload)
    },
    updatePhone: (context,payload) => {
        context.commit('updatePhone',payload)
    },
    updateDateOfBirth: (context,payload) => {
        context.commit('updateDateOfBirth',payload)
    },
    updateTypeOfClient: (context,payload) => {
        context.commit('updateTypeOfClient',payload)
    },
    updateDoctor: (context,payload) => {
        context.commit('updateDoctor',payload)
    },
    updateIsMessage: (context,payload) => {
        context.commit('updateIsMessage',payload)
    }


}
const mutations={
    updateSeries: (state,payload) => {
        state.user.series=payload
    },
    updateNumber: (state,payload) => {
        state.user.number=payload
    },
    updateTypeOfDoc: (state,payload) => {
        state.user.typeOfDoc=payload
    },
    updateIssuedBy: (state,payload) => {
        state.user.issuedBy=payload
    },
    updateDateOfIssue: (state,payload) => {
        state.user.dateOfIssue=payload
    },
    updateIndex: (state,payload) => {
        state.user.index=payload
    },
    updateCountry: (state,payload) => {
        state.user.country=payload
    },
    updateRegion: (state,payload) => {
        state.user.region=payload
    },
    updateCity: (state,payload) => {
        state.user.city=payload
    },
    updateStreet: (state,payload) => {
        state.user.street=payload
    },
    updateHouse: (state,payload) => {
        state.user.house=payload
    },
    updateSecondName: (state,payload) => {
        state.user.secondName=payload
    },
    updateFirstName: (state,payload) => {
        state.user.firstName=payload
    },
    updateSurname: (state,payload) => {
        state.user.surname=payload
    },
    updateDateOfBirth: (state,payload) => {
        state.user.dateOfBirth=payload
    },
    updateSex: (state,payload) => {
        state.user.sex=payload
    },
    updateTypeOfClient: (state,payload) => {
        state.user.typeOfClient=payload
    },
    updateIsMessage: (state,payload) => {
        state.user.isMessage=payload
    },
    updatePhone: (state,payload) => {
        state.user.phone=payload
    },
    updateDoctor: (state,payload) => {
        state.user.doctor=payload
    },


}
const getters={
    
}

export default {
   state, actions, mutations, getters
}