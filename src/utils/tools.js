import './Date';

export default {
  formatDate: date => {
    return new Date(date).format('yyyy-MM-dd');
  },
  formatDateTime: date => {
    return new Date(date).format('yyyy-MM-dd hh:mm:ss');
  },
};
