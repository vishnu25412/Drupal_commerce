<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/contrib/gin/templates/navigation/menu--toolbar--gin.html.twig */
class __TwigTemplate_e4c5de81d0bb0bab870067e3ec6c50db extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 23
        $macros["menus"] = $this->macros["menus"] = $this;
        // line 24
        echo "
";
        // line 29
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [($context["items"] ?? null), ($context["attributes"] ?? null), 0, false, ($context["menu_name"] ?? null), ($context["icon_default"] ?? null), ($context["icon_path"] ?? null), ($context["toolbar_variant"] ?? null)], 29, $context, $this->getSourceContext()));
        echo "

";
        $this->env->getExtension('\Drupal\Core\Template\TwigExtension')
            ->checkDeprecations($context, ["_self", "items", "attributes", "menu_name", "icon_default", "icon_path", "toolbar_variant", "menu_level", "loop", "parent"]);    }

    // line 31
    public function macro_menu_links($__items__ = null, $__attributes__ = null, $__menu_level__ = null, $__parent__ = null, $__menu_name__ = null, $__icon_default__ = null, $__icon_path__ = null, $__toolbar_variant__ = null, ...$__varargs__)
    {
        $macros = $this->macros;
        $context = $this->env->mergeGlobals([
            "items" => $__items__,
            "attributes" => $__attributes__,
            "menu_level" => $__menu_level__,
            "parent" => $__parent__,
            "menu_name" => $__menu_name__,
            "icon_default" => $__icon_default__,
            "icon_path" => $__icon_path__,
            "toolbar_variant" => $__toolbar_variant__,
            "varargs" => $__varargs__,
        ]);

        $blocks = [];

        ob_start();
        try {
            // line 32
            echo "  ";
            $macros["menus"] = $this;
            // line 33
            echo "  ";
            if (($context["items"] ?? null)) {
                // line 34
                echo "    ";
                if ((($context["menu_level"] ?? null) == 0)) {
                    // line 35
                    echo "      <ul";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", ["toolbar-menu"], "method", false, false, true, 35), 35, $this->source), "html", null, true);
                    echo ">
    ";
                } else {
                    // line 37
                    echo "      <ul class=\"toolbar-menu\">
    ";
                }
                // line 39
                echo "    ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                $context['loop'] = [
                  'parent' => $context['_parent'],
                  'index0' => 0,
                  'index'  => 1,
                  'first'  => true,
                ];
                if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                    $length = count($context['_seq']);
                    $context['loop']['revindex0'] = $length - 1;
                    $context['loop']['revindex'] = $length;
                    $context['loop']['length'] = $length;
                    $context['loop']['last'] = 1 === $length;
                }
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 40
                    echo "      ";
                    // line 41
                    $context["classes"] = ["menu-item", ((twig_get_attribute($this->env, $this->source,                     // line 43
$context["item"], "is_expanded", [], "any", false, false, true, 43)) ? ("menu-item--expanded") : ("")), ((twig_get_attribute($this->env, $this->source,                     // line 44
$context["item"], "is_collapsed", [], "any", false, false, true, 44)) ? ("menu-item--collapsed") : ("")), ((twig_get_attribute($this->env, $this->source,                     // line 45
$context["item"], "in_active_trail", [], "any", false, false, true, 45)) ? ("menu-item--active-trail") : ("")), ((twig_get_attribute($this->env, $this->source,                     // line 46
$context["item"], "gin_id", [], "any", false, false, true, 46)) ? (("menu-item__" . $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "gin_id", [], "any", false, false, true, 46), 46, $this->source))) : (""))];
                    // line 49
                    echo "
      ";
                    // line 51
                    echo "      ";
                    if ((((($context["menu_level"] ?? null) == 0) && (twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 51) == 1)) && (twig_get_attribute($this->env, $this->source, $context["item"], "gin_id", [], "any", false, false, true, 51) != "admin_toolbar_tools-help"))) {
                        // line 52
                        echo "        <li class=\"menu-item menu-item--expanded menu-item__tools\">
          ";
                        // line 53
                        if (((($context["icon_default"] ?? null) == false) && (($context["icon_path"] ?? null) != ""))) {
                            // line 54
                            echo "            <a href=\"";
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getPath("<front>"));
                            echo "\" class=\"toolbar-logo\" data-drupal-link-system-path=\"<front>\">
              <img src=\"";
                            // line 55
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->getFileUrl($this->sandbox->ensureToStringAllowed(($context["icon_path"] ?? null), 55, $this->source)), "html", null, true);
                            echo "\" class=\"toolbar-icon-home\" alt=\"";
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Home"));
                            echo "\" />
            </a>
          ";
                        } else {
                            // line 58
                            echo "            <a href=\"";
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getPath("<front>"));
                            echo "\" class=\"toolbar-icon toolbar-icon-admin-toolbar-tools-help toolbar-icon-default\" data-drupal-link-system-path=\"<front>\">
              ";
                            // line 59
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Home"));
                            echo "
            </a>
          ";
                        }
                        // line 62
                        echo "        </li>
      ";
                    }
                    // line 64
                    echo "
      ";
                    // line 68
                    echo "
      ";
                    // line 70
                    echo "      ";
                    if (((($context["menu_level"] ?? null) == 1) && (twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 70) == 1))) {
                        // line 71
                        echo "        <li class=\"menu-item-title\">
          <h2 class=\"toolbar-menu__title\">
            <a href=\"";
                        // line 73
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["parent"] ?? null), "url", [], "any", false, false, true, 73), 73, $this->source), "html", null, true);
                        echo "\">";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["parent"] ?? null), "title", [], "any", false, false, true, 73), 73, $this->source), "html", null, true);
                        echo "</a>
          </h2>
        </li>
        ";
                        // line 76
                        if ((($context["toolbar_variant"] ?? null) == "vertical")) {
                            // line 77
                            echo "          <li class=\"menu-item\">
            <a href=\"";
                            // line 78
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["parent"] ?? null), "url", [], "any", false, false, true, 78), 78, $this->source), "html", null, true);
                            echo "\" class=\"toolbar-icon\">";
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Overview"));
                            echo "</a>
          </li>
        ";
                        }
                        // line 81
                        echo "      ";
                    } elseif (((($context["menu_level"] ?? null) > 1) && (twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 81) == 1))) {
                        // line 82
                        echo "        <li class=\"menu-item-title\">
          <h3 class=\"toolbar-menu__sub-title\">
            <a href=\"";
                        // line 84
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["parent"] ?? null), "url", [], "any", false, false, true, 84), 84, $this->source), "html", null, true);
                        echo "\">";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["parent"] ?? null), "title", [], "any", false, false, true, 84), 84, $this->source), "html", null, true);
                        echo "</a>
          </h3>
        </li>
        ";
                        // line 87
                        if ((($context["toolbar_variant"] ?? null) == "vertical")) {
                            // line 88
                            echo "          <li class=\"menu-item\">
            <a href=\"";
                            // line 89
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["parent"] ?? null), "url", [], "any", false, false, true, 89), 89, $this->source), "html", null, true);
                            echo "\" class=\"toolbar-icon\">";
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Overview"));
                            echo "</a>
          </li>
        ";
                        }
                        // line 92
                        echo "      ";
                    }
                    // line 93
                    echo "
      <li";
                    // line 94
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 94), "addClass", [($context["classes"] ?? null)], "method", false, false, true, 94), 94, $this->source), "html", null, true);
                    echo ">
        ";
                    // line 95
                    if ((((twig_get_attribute($this->env, $this->source, $context["item"], "gin_id", [], "any", false, false, true, 95) == "admin_toolbar_tools-help") && (($context["icon_default"] ?? null) == false)) && (($context["icon_path"] ?? null) != ""))) {
                        // line 96
                        echo "          <a href=\"";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getPath("<front>"));
                        echo "\" class=\"toolbar-logo\" data-drupal-link-system-path=\"<front>\">
            <img src=\"";
                        // line 97
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->getFileUrl($this->sandbox->ensureToStringAllowed(($context["icon_path"] ?? null), 97, $this->source)), "html", null, true);
                        echo "\" class=\"toolbar-icon-home\" alt=\"";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Home"));
                        echo "\" />
          </a>
        ";
                    } elseif ((twig_get_attribute($this->env, $this->source,                     // line 99
$context["item"], "gin_id", [], "any", false, false, true, 99) == "admin_toolbar_tools-help")) {
                        // line 100
                        echo "          ";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->getLink("Drupal", $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 100), 100, $this->source), ["class" => ["toolbar-icon-default"]]), "html", null, true);
                        echo "
        ";
                    } else {
                        // line 102
                        echo "          ";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->getLink($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 102), 102, $this->source), $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 102), 102, $this->source), ["class" => [((twig_get_attribute($this->env, $this->source, $context["item"], "in_active_trail", [], "any", false, false, true, 102)) ? ("is-active") : (""))]]), "html", null, true);
                        echo "
        ";
                    }
                    // line 104
                    echo "        ";
                    if (twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 104)) {
                        // line 105
                        echo "          ";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 105), ($context["attributes"] ?? null), (($context["menu_level"] ?? null) + 1), $context["item"], ($context["menu_name"] ?? null), ($context["icon_default"] ?? null), ($context["icon_path"] ?? null), ($context["toolbar_variant"] ?? null)], 105, $context, $this->getSourceContext()));
                        echo "
        ";
                    }
                    // line 107
                    echo "      </li>
    ";
                    ++$context['loop']['index0'];
                    ++$context['loop']['index'];
                    $context['loop']['first'] = false;
                    if (isset($context['loop']['length'])) {
                        --$context['loop']['revindex0'];
                        --$context['loop']['revindex'];
                        $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 109
                echo "    </ul>
  ";
            }
            // line 111
            echo "
  ";
            // line 112
            if ((($context["menu_level"] ?? null) == 0)) {
                // line 113
                echo "    ";
                // line 114
                echo "    <a href=\"#\" class=\"toolbar-menu__trigger trigger\" role=\"button\" aria-pressed=\"false\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Close"));
                echo "</a>
  ";
            }

            return ('' === $tmp = ob_get_contents()) ? '' : new Markup($tmp, $this->env->getCharset());
        } finally {
            ob_end_clean();
        }
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "themes/contrib/gin/templates/navigation/menu--toolbar--gin.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable()
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  291 => 114,  289 => 113,  287 => 112,  284 => 111,  280 => 109,  265 => 107,  259 => 105,  256 => 104,  250 => 102,  244 => 100,  242 => 99,  235 => 97,  230 => 96,  228 => 95,  224 => 94,  221 => 93,  218 => 92,  210 => 89,  207 => 88,  205 => 87,  197 => 84,  193 => 82,  190 => 81,  182 => 78,  179 => 77,  177 => 76,  169 => 73,  165 => 71,  162 => 70,  159 => 68,  156 => 64,  152 => 62,  146 => 59,  141 => 58,  133 => 55,  128 => 54,  126 => 53,  123 => 52,  120 => 51,  117 => 49,  115 => 46,  114 => 45,  113 => 44,  112 => 43,  111 => 41,  109 => 40,  91 => 39,  87 => 37,  81 => 35,  78 => 34,  75 => 33,  72 => 32,  52 => 31,  44 => 29,  41 => 24,  39 => 23,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Default theme implementation to display a toolbar menu.
 *
 * Available variables:
 * - menu_name: The machine name of the menu.
 * - items: A nested list of menu items. Each menu item contains:
 *   - attributes: HTML attributes for the menu item.
 *   - below: The menu item child items.
 *   - title: The menu link title.
 *   - path: The menu link path.
 *   - localized_options: Menu link localized options.
 *   - is_expanded: TRUE if the link has visible children within the current
 *     menu tree.
 *   - is_collapsed: TRUE if the link has children within the current menu tree
 *     that are not currently visible.
 *   - in_active_trail: TRUE if the link is in the active trail.
 *
 * @ingroup themeable
 */
#}
{% import _self as menus %}

{#
  We call a macro which calls itself to render the full tree.
  @see https://twig.symfony.com/doc/1.x/tags/macro.html
#}
{{ menus.menu_links(items, attributes, 0, false, menu_name, icon_default, icon_path, toolbar_variant) }}

{% macro menu_links(items, attributes, menu_level, parent, menu_name, icon_default, icon_path, toolbar_variant) %}
  {% import _self as menus %}
  {% if items %}
    {% if menu_level == 0  %}
      <ul{{ attributes.addClass('toolbar-menu') }}>
    {% else %}
      <ul class=\"toolbar-menu\">
    {% endif %}
    {% for item in items %}
      {%
        set classes = [
          'menu-item',
          item.is_expanded ? 'menu-item--expanded',
          item.is_collapsed ? 'menu-item--collapsed',
          item.in_active_trail ? 'menu-item--active-trail',
          item.gin_id ? 'menu-item__' ~ item.gin_id
        ]
      %}

      {# Add Home if it doesn't exist #}
      {% if menu_level == 0 and loop.index == 1 and item.gin_id != 'admin_toolbar_tools-help' %}
        <li class=\"menu-item menu-item--expanded menu-item__tools\">
          {% if icon_default == false and icon_path != '' %}
            <a href=\"{{ path('<front>') }}\" class=\"toolbar-logo\" data-drupal-link-system-path=\"<front>\">
              <img src=\"{{ file_url(icon_path) }}\" class=\"toolbar-icon-home\" alt=\"{{ 'Home'|t }}\" />
            </a>
          {% else %}
            <a href=\"{{ path('<front>') }}\" class=\"toolbar-icon toolbar-icon-admin-toolbar-tools-help toolbar-icon-default\" data-drupal-link-system-path=\"<front>\">
              {{ 'Home'|t }}
            </a>
          {% endif %}
        </li>
      {% endif %}

      {# {% if menu_level == 0 and item.gin_id == 'help-main' %}
        <li class=\"menu-item menu-item__spacer menu-item--no-link\"></li>
      {% endif %} #}

      {# Add Menu Titles #}
      {% if menu_level == 1 and loop.index == 1 %}
        <li class=\"menu-item-title\">
          <h2 class=\"toolbar-menu__title\">
            <a href=\"{{ parent.url }}\">{{ parent.title }}</a>
          </h2>
        </li>
        {% if toolbar_variant == 'vertical' %}
          <li class=\"menu-item\">
            <a href=\"{{ parent.url }}\" class=\"toolbar-icon\">{{ 'Overview'|t }}</a>
          </li>
        {% endif %}
      {% elseif menu_level > 1 and loop.index == 1 %}
        <li class=\"menu-item-title\">
          <h3 class=\"toolbar-menu__sub-title\">
            <a href=\"{{ parent.url }}\">{{ parent.title }}</a>
          </h3>
        </li>
        {% if toolbar_variant == 'vertical' %}
          <li class=\"menu-item\">
            <a href=\"{{ parent.url }}\" class=\"toolbar-icon\">{{ 'Overview'|t }}</a>
          </li>
        {% endif %}
      {% endif %}

      <li{{ item.attributes.addClass(classes) }}>
        {% if item.gin_id == 'admin_toolbar_tools-help' and icon_default == false and icon_path != '' %}
          <a href=\"{{ path('<front>') }}\" class=\"toolbar-logo\" data-drupal-link-system-path=\"<front>\">
            <img src=\"{{ file_url(icon_path) }}\" class=\"toolbar-icon-home\" alt=\"{{ 'Home'|t }}\" />
          </a>
        {% elseif item.gin_id == 'admin_toolbar_tools-help' %}
          {{ link('Drupal', item.url, {'class': ['toolbar-icon-default']}) }}
        {% else %}
          {{ link(item.title, item.url, {'class': [item.in_active_trail ? 'is-active']}) }}
        {% endif %}
        {% if item.below %}
          {{ menus.menu_links(item.below, attributes, menu_level + 1, item, menu_name, icon_default, icon_path, toolbar_variant) }}
        {% endif %}
      </li>
    {% endfor %}
    </ul>
  {% endif %}

  {% if menu_level == 0 %}
    {# Custom toggle for menu #}
    <a href=\"#\" class=\"toolbar-menu__trigger trigger\" role=\"button\" aria-pressed=\"false\">{{ 'Close'|t }}</a>
  {% endif %}
{% endmacro %}
", "themes/contrib/gin/templates/navigation/menu--toolbar--gin.html.twig", "/Applications/MAMP/htdocs/drupal_10_practice/web/themes/contrib/gin/templates/navigation/menu--toolbar--gin.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("import" => 23, "macro" => 31, "if" => 33, "for" => 39, "set" => 41);
        static $filters = array("escape" => 35, "t" => 55);
        static $functions = array("path" => 54, "file_url" => 55, "link" => 100);

        try {
            $this->sandbox->checkSecurity(
                ['import', 'macro', 'if', 'for', 'set'],
                ['escape', 't'],
                ['path', 'file_url', 'link']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
