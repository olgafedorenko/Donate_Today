"""
"name": "Number three",
        "total_amount":"500",
        "currency":"USD",
        "amount":"",
        "about":"let's help Tommy buy a TV",
        "participants":[],
        "image":"url",
        "id": "13",
        "node_id":"5a923cf64fc163004902f4ee",
        "user_id":"5a91eec4877971004f1d41a1"

"""
from sqlalchemy import Column, Integer, String

from db import Base


class Projects(Base):
    __tablename__ = 'projects'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    total_amount = Column(Integer)
    amount = Column(Integer)
    currency = Column(String(500))
    about = Column(String(500))
    city = Column(String(500))
    participants = Column(String(500))
    image = Column(String(500))
    node_id = Column(String(500))
    user_id = Column(String(500))
    user_name = Column(String(500))

    def json(self):
        return {
            'id': self.id,
            'name': self.name,
            'total_amount': self.total_amount,
            'city': self.city,
            'amount': self.amount,
            'currency': self.currency,
            'about': self.about,
            'participants': self.participants,
            'image': self.image,
            'node_id': self.node_id,
            'user_id': self.user_id,
            'user_name': self.user_name
        }
