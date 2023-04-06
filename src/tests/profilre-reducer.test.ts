import mainPageReducer, {
    addPostAC,
    changeStatusAC, GetContactsType, GetPhotosType,
    GetProfileType,
    setLoadingAC,
    setProfile
} from "../state/mainPage-reducer";

describe('mainPageReducer', () => {
    let state = {
        stateForMainPosts: [],
        stateForProfile: {} as GetProfileType,
        isLoading: false,
        status: ''
    };

    it('should add a new post', () => {
        const action = addPostAC('Test message');
        const newState = mainPageReducer(state, action);
        expect(newState.stateForMainPosts.length).toBe(1);
        expect(newState.stateForMainPosts[0].message).toBe('Test message');
    });

    it('should set a new profile', () => {
        const action = setProfile({
            aboutMe: 'I am a junior',
            contacts: {} as GetContactsType,
            lookingForAJob: true,
            lookingForAJobDescription: 'I am looking a job',
            fullName: 'Bredd Tort',
            userId: 12,
            photos: {} as GetPhotosType
        });
        const newState = mainPageReducer(state, action);
        expect(newState.stateForProfile).toEqual({
            aboutMe: 'I am a junior',
            contacts: {} as GetContactsType,
            lookingForAJob: true,
            lookingForAJobDescription: 'I am looking a job',
            fullName: 'Bredd Tort',
            userId: 12,
            photos: {} as GetPhotosType
        });
    });

    it('should set isLoading', () => {
        const action = setLoadingAC(true);
        const newState = mainPageReducer(state, action);
        expect(newState.isLoading).toBe(true);
    });

    it('should change status', () => {
        const action = changeStatusAC('New status');
        const newState = mainPageReducer(state, action);
        expect(newState.status).toBe('New status');
    });
});

describe('addPostAC', () => {
    it('should return an action object', () => {
        const action = addPostAC('Test message');
        expect(action).toEqual({ type: 'ADD-POST', value: 'Test message' });
    });
});

describe('setProfile', () => {
    it('should return an action object', () => {
        const action = setProfile({
            aboutMe: 'I am a junior',
            contacts: {} as GetContactsType,
            lookingForAJob: true,
            lookingForAJobDescription: 'I am looking a job',
            fullName: 'Bredd Tort',
            userId: 12,
            photos: {} as GetPhotosType
        });
        expect(action).toEqual({
            type: 'SET-PROFILE',
            payload: { profile: {
                    aboutMe: 'I am a junior',
                    contacts: {} as GetContactsType,
                    lookingForAJob: true,
                    lookingForAJobDescription: 'I am looking a job',
                    fullName: 'Bredd Tort',
                    userId: 12,
                    photos: {} as GetPhotosType
                } }
        });
    });
});

describe('setLoadingAC', () => {
    it('should return an action object', () => {
        const action = setLoadingAC(true);
        expect(action).toEqual({ type: 'IS-LOADING', payload: { value: true } });
    });
});

describe('changeStatusAC', () => {
    it('should return an action object', () => {
        const action = changeStatusAC('New status');
        expect(action).toEqual({ type: 'CHANGE-STATUS', payload: { value: 'New status' } });
    });
});