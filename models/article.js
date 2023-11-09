module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'article',
      {
          article_idx: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
          comment: '게시글고유번호',
        },
        title: {
          type: DataTypes.STRING(200),
          primaryKey: false,
          allowNull: false,
          comment: '글제목',
        },
        contents: {
            type: DataTypes.TEXT,
            allowNull: true,
            comment: '글내용..',
          }
      },
      {
        // 등록일, 수정일이 자동으로 된다.
         timestamps: true,
         paranoid: true // 실제로 삭제는 안하지만 삭제된 것 처럼 하게 할 수 있다.
     });
  };