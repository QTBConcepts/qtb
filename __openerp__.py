{
    # Theme information
    'name': "QTB Admin",
    'description': """
    """,
    'category': 'Theme',
    'version': '1.0',
    'depends': ['website'],

    # templates, pages, and snippets
    'data': [
        'views/pages.xml',
        #'views/options.xml',
        'views/snippets.xml',
        'views/backoffice.xml'
    ],

    'qweb': [
        'static/src/xml/*.xml',
    ],

    # Your information
    'author': "QTB Concepts",
    'website': "http://www.qtbconcepts.com",
}