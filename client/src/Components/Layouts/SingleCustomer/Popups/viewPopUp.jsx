import React, { Component } from "react";
import { Modal, Table } from "antd";

class View extends Component {
  state = {
    visible: this.props.visible,
    id: this.props.id,
    information: null
  };

  handleCancel = e => {
    this.props.visibleFun("singleCustomer", "viewVisibility")(e);
  };
  componentWillReceiveProps(props) {
    const { visible, id, information } = props;
    this.setState({ visible, id, information });
  }

  render() {
    const columns = [{ title: 'اسم الطلبية', dataIndex: 'f2' },
    { title: 'السعر/ر.س', dataIndex: 'f3' }];
    if (this.state.information) {
      const { information } = this.state;
      return (
        <Modal
          title="عرض الطلب"
          visible={this.state.visible}
          cancelText="اغلاق"
          onCancel={this.handleCancel}
          closable={false}
          style={{ direction: "rtl", width: '575' }}
          className="viewModal"
        >
          <div className="view__captain">
            <div className="view__captain-box">
              <p className="view__captain__paragraph">اسم الزبون : </p>
              <p className="view__captain-value">{information.captain}</p>
              {/* بدل كاستمر  */}
            </div>
            <div className="view__captain-box">
              <p className="view__captain__paragraph">تاريخ الطلبية : </p>
              <p className="view__captain-value">{information.date}</p>
            </div>
            <div className="view__captain-box">
              <p className="view__captain__paragraph"> عنوان الزبون: </p>
              <p className="view__captain-value">{information.place}</p>
              {/* لعنوان الزبون مش الطلب */}
            </div>
            <div className="view__captain-box">
              <p className="view__captain__paragraph">حالة الطلب : </p>
              <p className="view__captain-value">{information.status}</p>
            </div>
            <div className="view__captain-box">
              <p className="view__captain__paragraph"> هاتف الزبون: </p>
              <p className="view__captain-value">{information.phone}</p>
              {/* تلفون العميل مش الطلب */}
            </div>
            <Table dataSource={information.items} columns={columns} className="view__captain-table" />
            <div className="view__captain-box">
              <p className="view__captain__paragraph">السعر الكلي : </p>
              <p className="view__captain-value">{information.price} ر.س</p>
            </div>
          </div>
        </Modal>
      );
    }
    return "";
  }
}

export default View;
