import api from './api';

export const chatService = {
    getConversations: async () => {
        const response = await api.get('/chat/conversations');
        return response.data;
    },

    getMessages: async (conversationId: string, limit = 50, offset = 0) => {
        const response = await api.get(`/chat/conversations/${conversationId}/messages`, {
            params: { limit, offset }
        });
        return response.data;
    },

    startConversation: async (partnerId: number) => {
        const response = await api.post('/chat/conversations', { partnerId });
        return response.data;
    },

    getPotentialContacts: async () => {
        // Fetch companies to chat with (Contractors)
        const response = await api.get('/companies');
        return response.data;
    }
};
