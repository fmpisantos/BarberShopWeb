const reducer = {
    reducers:
      {
        changePage: (state, action) => {
          return {...state, value: action.payload};
        },
        reset: state => {
            return {
              ...state,
              valid: 1,
              service: undefined,
              barber: undefined,
              agenda: undefined
            };
        },
        setService: (state, action) => {
          return {
            ...state, 
            service: JSON.parse(action.payload),
            valid: 2
          };
        },
        clearService: state => {
          return{
            ...state,
            valid: 1,
            value: 1,
            service: undefined,
            barber: undefined,
            agenda: undefined
          };
        },
        setBarber: (state, action) => {
          return {
            ...state,
            valid: 3,
            barber: JSON.parse(action.payload)
          };
        },
        clearBarber: state => {
          return {
            ...state,
            valid: 2,
            value: 2,
            barber: undefined
          };
        }
      }
  }
  
  export default reducer;